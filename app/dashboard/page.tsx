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
    <div className="border-1">
      <DropZone />

      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div>
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
}
