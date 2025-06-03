"use client";

import { db, storage } from "@/firebase";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { useState } from "react";
import DropzoneComponent from "react-dropzone";
import { Loader2, UploadCloud } from "lucide-react"; // Import icons

function DropZone() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const onDrop = (acceptedFiles: File[]) => {
    // Show a general loading toast for multiple files
    const overallToastId = toast.loading("Preparing files for upload...");
    setLoading(true);

    const uploadPromises = acceptedFiles.map(async (file) => {
      const reader = new FileReader();

      reader.onabort = () => {
        console.log("file reading was aborted");
        toast.error(`Upload aborted for ${file.name}`, { id: overallToastId });
      };
      reader.onerror = () => {
        console.log("file reading has failed");
        toast.error(`Failed to read ${file.name}`, { id: overallToastId });
      };

      reader.onload = async () => {
        try {
          await uploadFileToFirebase(file);
        } catch (error) {
          console.error("Error uploading file:", error);
          toast.error(`Failed to upload ${file.name}`, { id: overallToastId });
        }
      };

      reader.readAsArrayBuffer(file);
    });

    // Wait for all uploads to complete
    Promise.all(uploadPromises)
      .then(() => {
        toast.success("All files uploaded successfully!", { id: overallToastId });
      })
      .catch((error) => {
        console.error("Some uploads failed:", error);
        toast.error("Some files failed to upload.", { id: overallToastId });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const uploadFileToFirebase = async (selectedFile: File) => {
    if (!user) {
      toast.error("User not authenticated.");
      return;
    }

    const fileToastId = toast.loading(`Uploading ${selectedFile.name}...`);

    try {
      const docRef = await addDoc(collection(db, "users", user.id, "files"), {
        userId: user.id,
        filename: selectedFile.name,
        fullName: user.fullName,
        profileImg: user.imageUrl,
        timeStamp: serverTimestamp(),
        type: selectedFile.type,
        size: selectedFile.size,
      });

      const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);

      await uploadBytes(imageRef, selectedFile);
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
        downloadURL: downloadURL,
      });

      toast.success(`${selectedFile.name} uploaded successfully!`, { id: fileToastId });
    } catch (error) {
      console.error("Error during file upload:", error);
      toast.error(`Failed to upload ${selectedFile.name}.`, { id: fileToastId });
      throw error; // Re-throw to be caught by Promise.all for overall toast
    }
  };

  const maxSize = 20971520; // 20 MB

  return (
    <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={onDrop}>
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

        return (
          <section className="m-4 p-4 rounded-[var(--radius)] bg-[var(--card)] shadow-[var(--shadow-sm)]">
            <div
              {...getRootProps()}
              className={cn(
                "w-full h-52 flex flex-col justify-center items-center p-5 border border-dashed rounded-[var(--radius)] transition-colors duration-200 ease-in-out cursor-pointer",
                loading ? "opacity-70 cursor-not-allowed" : "", // Dim and disable when loading
                isDragActive
                  ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]" // Primary color for drag active
                  : "border-[var(--border)] bg-[var(--input)] text-[var(--muted-foreground)]" // Default colors
              )}
            >
              <input {...getInputProps()} />

              {loading ? (
                <div className="flex flex-col items-center">
                  <Loader2 className="h-10 w-10 text-[var(--primary)] animate-spin mb-4" />
                  <p className="text-lg font-semibold text-[var(--foreground)]">Uploading files...</p>
                  <p className="text-sm text-[var(--muted-foreground)]">Please wait, this may take a moment.</p>
                </div>
              ) : (
                <>
                  <UploadCloud className="h-12 w-12 mb-4" />
                  <p className="text-lg font-semibold mb-2">
                    {!isDragActive && "Drag & drop files here, or click to select"}
                    {isDragActive && !isDragReject && "Drop your files here!"}
                    {isDragReject && "Unsupported file type..."}
                  </p>
                  {isFileTooLarge && (
                    <p className="text-[var(--destructive)] mt-2 text-sm font-medium">
                      File is too large. Max size: {maxSize / (1024 * 1024)} MB
                    </p>
                  )}
                  {!isDragActive && !isFileTooLarge && (
                    <p className="text-sm text-[var(--muted-foreground)]">
                      (Max file size: {maxSize / (1024 * 1024)} MB)
                    </p>
                  )}
                </>
              )}
            </div>
          </section>
        );
      }}
    </DropzoneComponent>
  );
}

export default DropZone;