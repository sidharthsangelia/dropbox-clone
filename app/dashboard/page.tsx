import DropZone from "@/components/DropZone";
import TableWrapper from "@/components/table/TableWrapper";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import { auth } from "@clerk/nextjs/server";
import { collection, getDocs } from "firebase/firestore";

export default async function Page() {
  const { userId } = await auth(); // Works as expected in Clerk v5+

  const docsResults = await getDocs(collection(db, "users", userId!, "files"));

  const skeletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timeStamp?.seconds * 1000) || undefined,
    downloadURL: doc.data().downloadURL || "",
    type: doc.data().type,
    size: doc.data().size,
    fullName: doc.data().fullName,
  }));
  return (
    // Apply background color from theme and add subtle padding
    <div className="min-h-screen bg-[var(--background)] p-4 sm:p-6 lg:p-8">
      <DropZone />

      <section className="container space-y-6 mt-8">
        {/* Use foreground color for headings and a modern sans-serif font */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] font-sans">
          All Files
        </h2>
        <div>
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
}