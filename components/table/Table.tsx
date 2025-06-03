"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";
import { FileType } from "@/typings";
import { useAppStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import { DeleteModal } from "../DeleteModal";
import RenameModal from "../RenameModal";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  // now here the global states from zustand will be used
  const [setIsDeleteModalOpen, setFileId, setFilename, setIsRenameModalOpen] =
    useAppStore(
      useShallow((state) => [
        state.setIsDeleteModalOpen,
        state.setFileId,
        state.setFilename,
        state.setIsRenameModalOpen,
      ])
    );

  // this is where the deletemodal function goes

  const openDeleteModal = (fileId: string) => {
    setFileId(fileId);
    setIsDeleteModalOpen(true);
  };
  const openRenameModal = (fileId: string, filename: string) => {
    setFileId(fileId);
    setFilename(filename);
    setIsRenameModalOpen(true);
  };

  return (
    // Apply rounded corners and border color from theme, and subtle shadow
    <div
      className="rounded-[var(--radius)] border overflow-hidden shadow-[var(--shadow-sm)]" // Added overflow-hidden and shadow
      style={{ borderColor: "var(--border)" }}
    >
      <Table>
        {/* Stronger background for TableHeader for better distinction */}
        <TableHeader className="bg-[var(--secondary)]">
          {table.getHeaderGroups().map((headerGroup) => (
            // Apply border from theme for header rows
            <TableRow
              key={headerGroup.id}
              className="border-b"
              style={{ borderColor: "var(--border)" }}
            >
              {headerGroup.headers.map((header) => {
                return (
                  // Apply foreground and font styles for header cells
                  <TableHead
                    key={header.id}
                    className="text-[var(--secondary-foreground)] font-bold text-left p-4 font-sans uppercase tracking-wide" // Increased font-weight, added uppercase and tracking
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        {/* Table body with card background and subtle row hover effect */}
        <TableBody className="bg-[var(--card)] text-[var(--card-foreground)]">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="border-b hover:bg-[var(--muted)]/50 transition-colors duration-200" // Subtle hover effect
                style={{ borderColor: "var(--border)" }}
              >
                <DeleteModal />
                <RenameModal />

                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="p-4 font-sans"> {/* Applied font-sans here too */}
                    {cell.column.id === "filename" ? (
                      // Styling for clickable filename with primary color
                      <p
                        onClick={() => {
                          openRenameModal(
                            (row.original as FileType).id,
                            (row.original as FileType).filename
                          );
                        }}
                        className="underline flex items-center text-[var(--primary)] hover:text-[var(--primary)]/80 hover:cursor-pointer transition-colors duration-200 font-sans"
                      >
                        {cell.getValue() as string}{" "}
                        <PencilIcon size={15} className="ml-2 text-[var(--primary)]" /> {/* Ensure icon color matches text */}
                      </p>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                ))}
                <TableCell className="p-4">
                  {/* Destructive button variant for delete, with proper sizing and radius */}
                  <Button
                    variant={"outline"} // Reverted to outline, but with explicit strong colors
                    onClick={() => {
                      openDeleteModal((row.original as FileType).id);
                    }}
                    className="h-9 w-9 p-0 flex items-center justify-center rounded-[var(--radius-sm)] bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:bg-[var(--destructive)]/90 hover:text-[var(--destructive-foreground)] transition-colors duration-200"
                  >
                    <TrashIcon className="text-red-500"size={20} />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-[var(--muted-foreground)] font-sans italic" // Muted foreground for "no files" message
              >
                You have no files......
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}