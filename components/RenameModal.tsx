"use client";

import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import {
  Dialog,
 
  DialogContent,

  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { useAppStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import { useState } from "react";

import { useUser } from "@clerk/nextjs";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

function RenameModal() {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const [isRenameModalOpen, setIsRenameModalOpen, fileId, filename] =
    useAppStore(
      useShallow((state) => [
        state.isRenameModalOpen,
        state.setIsRenameModalOpen,
        state.fileId,
        state.filename,
      ])
    );

  const renameFile = async () => {
    if (!user || !fileId) return;

    const toastId = toast.loading("Renaming file...")

    await updateDoc(doc(db, "users", user.id, "files", fileId), {
      filename: input,
    });

    toast.success("File renamed successfully!", { id: toastId });
    setInput("");
    setIsRenameModalOpen(false);
  };
  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Rename the Filek</DialogTitle>

          <Input
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                renameFile();
              }
            }}
          />
          <div className="flex justify-end space-x-2 py-3">
            <Button
              type="submit"
              size="sm"
              variant={"ghost"}
              className="px-3"
              onClick={() => setIsRenameModalOpen(false)}
            >
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>

            <Button
              size="sm"
              variant={"ghost"}
              className="px-3"
              onClick={() => setIsRenameModalOpen(false)}
            >
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>

            <Button
              type="submit"
              size="sm"
              className="px-3"
              onClick={() => renameFile()}
            >
              <span className="sr-only">Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default RenameModal;
