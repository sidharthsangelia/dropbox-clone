"use client";

import { FileType } from "@/typings";
import { Button } from "../ui/button";
import { DataTable } from "./Table";
import { columns } from "./columns";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import { Skeleton } from "../ui/skeleton";

function TableWrapper({ skeletonFiles }: { skeletonFiles: FileType[] }) {
  const { user } = useUser();
  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  const [docs, loading, error] = useCollection(
    user &&
      query(
        collection(db, "users", user.id, "files"),
        // orderBy("timestamp", sort) // Re-enable if you want client-side sorting via Firebase query
      )
  );

  useEffect(() => {
    if (!docs) return;

    const files: FileType[] = docs.docs.map((doc) => {
      const data = doc.data();
      const timestamp = data.timestamp ? data.timestamp.toDate() : new Date();
      return {
        id: doc.id,
        filename: data.filename || doc.id,
        timestamp,
        fullName: data.fullName,
        downloadURL: data.downloadURL,
        type: data.type,
        size: data.size,
      };
    });

    console.log("TableWrapper: Setting initialFiles", files); // Debug
    setInitialFiles(files);
  }, [docs]);

  console.log("TableWrapper rendering", {
    user: user?.id,
    docs: docs?.docs.length,
    initialFiles: initialFiles.length,
    loading,
    error,
  }); // Debug

  if (docs?.docs.length === undefined || loading) {
    return (
      <div className="flex flex-col p-4 sm:p-6"> {/* Added padding here */}
        {/* Changed button to use primary colors directly for better visibility */}
        <Button
          variant={"default"} // Changed to default for a solid background
          className="ml-auto w-36 h-10 mb-5 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 rounded-[var(--radius)] font-sans"
        >
          <Skeleton className="h-5 w-full bg-[var(--primary-foreground)]/50" />
        </Button>
        {/* Apply border and rounded corners from theme */}
        <div
          className="border rounded-lg overflow-hidden" // Added overflow-hidden to contain inner elements within radius
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="border-b h-12 bg-[var(--muted)]" // Added muted background to skeleton header
            style={{ borderColor: "var(--border)" }}
          />
          {skeletonFiles.map((file) => (
            <div
              key={file.id}
              className="flex items-center space-x-4 p-5 w-full bg-[var(--card)] border-b last:border-b-0" // Card background for rows, border-b for separation
              style={{ borderColor: "var(--border)" }}
            >
              {/* Skeletons using muted and accent for visual distinction */}
              <Skeleton className="h-10 w-10 rounded-md bg-[var(--muted)]" /> {/* Slightly smaller skeleton icons */}
              <Skeleton className="h-10 w-full rounded-md bg-[var(--accent)]" />
            </div>
          ))}
          {skeletonFiles.length === 0 && (
            <div className="flex items-center space-x-4 p-5 w-full bg-[var(--card)]">
              <Skeleton className="h-10 w-10 rounded-md bg-[var(--muted)]" />
              <Skeleton className="h-10 w-full rounded-md bg-[var(--accent)]" />
            </div>
          )}
        </div>
      </div>
    );
  }

  if (error) {
    console.error("TableWrapper: Firebase error", error); // Debug
    // Use destructive color for error messages
    return (
      <div className="text-[var(--destructive-foreground)] bg-[var(--destructive)] p-4 rounded-md">
        Error loading files: {error.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-5 p-4 sm:p-6"> {/* Added padding to the container */}
      {/* Button styling reflecting primary and foreground colors, increased padding */}
      <Button
        variant={"default"} // Changed to default for a solid background
        onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
        className="cursor-pointer ml-auto w-fit px-6 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90 hover:text-[var(--primary-foreground)] rounded-[var(--radius)] font-sans shadow-[var(--shadow-sm)] transition-all duration-200"
      >
        Sort By...{sort === "desc" ? "Newest" : "Oldest"}
      </Button>
      <DataTable columns={columns} data={initialFiles} />
    </div>
  );
}

export default TableWrapper;