"use client";

import { COLOR_EXTENSION_MAP } from "@/constant";
import { FileType } from "@/typings";
import { ColumnDef } from "@tanstack/react-table";
import prettyBytes from "pretty-bytes";
import { FileIcon, defaultStyles } from "react-file-icon";
import { format } from "date-fns";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "File Type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            // @ts-ignore
            {...defaultStyles[extension]}
          />
        </div>
      );
    },
  },

  {
    accessorKey: "filename",
    header: "File Name",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
    cell: ({ row }) => {
      const rawDate = row.getValue("timestamp") as string | number | Date;
      const formatted = format(new Date(rawDate), "dd MMM yyyy, h:mm a");
      return <span>{formatted}</span>;
    },
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props }) => (
      <a
        href={renderValue() as string}
        target="_blank"
        className="text-blue-500 hover:text-blue-700"
      >
        Download
      </a>
    ),
  },
];
