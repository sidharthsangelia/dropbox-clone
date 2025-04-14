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
    user && query(collection(db, "users", user.id,"files"), 
    // orderBy("timestamp", sort)
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
      <div className="flex flex-col">
        <Button variant={"outline"} className="ml-auto w-36 h-10 mb-5">
          <Skeleton className="h-5 w-full" />
        </Button>
        <div className="border rounded-b-lg">
          <div className="border-b h-12" />
          {skeletonFiles.map((file) => (
            <div
              key={file.id}
              className="flex items-center space-x-4 p-5 w-full"
            >
              <Skeleton className="h-12 w-12" />
              <Skeleton className="h-12 w-full" />
            </div>
          ))}
          {skeletonFiles.length === 0 && (
            <div className="flex items-center space-x-4 p-5 w-full">
              <Skeleton className="h-12 w-12" />
              <Skeleton className="h-12 w-full" />
            </div>
          )}
        </div>
      </div>
    );
  }

  if (error) {
    console.error("TableWrapper: Firebase error", error); // Debug
    return <div>Error loading files: {error.message}</div>;
  }

  return (
    <div className="flex flex-col space-y-5 p-10">
      <Button
        variant={"outline"}
        onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
        className="cursor-pointer ml-auto w-fit"
      >
        Sort By...{sort === "desc" ? "Newest" : "Oldest"}
      </Button>
      <DataTable columns={columns} data={initialFiles} />
    </div>
  );
}

export default TableWrapper;