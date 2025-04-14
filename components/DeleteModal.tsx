"use client";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { db, storage } from "@/firebase";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { is } from "date-fns/locale";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useShallow } from "zustand/shallow";

export function DeleteModal() {
  // Correct destructuring to match the selector
  const { user } = useUser();

  const [isDeleteModalOpen, setIsDeleteModalOpen, fileId, setFileId] =
    useAppStore(
      useShallow((state) => [
        state.isDeleteModalOpen,
        state.setIsDeleteModalOpen,
        state.fileId,
        state.setFileId,
      ])
    );

  async function deleteFile() {
    if (!user || !fileId) return;
    const toastId = toast.loading("Deleting file...")
    const fileRef = ref(storage, `users/${user.id}/files/${fileId}`);

    try {
      await deleteObject(fileRef)
        .then(async () => {
          await deleteDoc(doc(db, "users", user.id, "files", fileId)).then(
            () => {
              console.log("Deleted!");
              toast.success("Deleted successfully!", { id: toastId });
            }
          );
        })
        .finally(() => {
          setIsDeleteModalOpen(false);
        });
    } catch (error) {
      console.log(error);
    }

    setIsDeleteModalOpen(false);
  }

  return (
    <Dialog
      open={isDeleteModalOpen}
      onOpenChange={(isOpen) => {
        setIsDeleteModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            file.
          </DialogDescription>
        </DialogHeader>
        <div className="flex space-x-2 py-3">
          <Button
            size="sm"
            className="px-3 flex-1 cursor-pointer"
            variant="ghost"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            <span className="sr-only">Cancel</span>
            <span>Cancel</span>
          </Button>
          <Button
            type="submit"
            size="sm"
            variant={"destructive"}
            className="px-3 flex-1 cursor-pointer"
            onClick={() => deleteFile()}
          >
            <span className="sr-only">Delete</span>
            <span>Delete</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
