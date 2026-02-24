"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Column {
    header: string;
    accessor: string;
    className?: string;
}

interface DataTableProps {
    data: any[];
    columns: Column[];
    className?: string;
}

export function DataTable({ data, columns, className }: DataTableProps) {
    return (
        <div className={cn("my-6 w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800", className)}>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="border-b border-neutral-200 bg-neutral-50/50 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-400">
                        <tr>
                            {columns.map((column, idx) => (
                                <th
                                    key={idx}
                                    className={cn(
                                        "px-4 py-3 font-medium tracking-tight",
                                        column.className
                                    )}
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                        {data.map((row, rowIdx) => (
                            <tr
                                key={rowIdx}
                                className="group transition-colors hover:bg-neutral-50/50 dark:hover:bg-neutral-900/40"
                            >
                                {columns.map((column, colIdx) => (
                                    <td
                                        key={colIdx}
                                        className={cn(
                                            "px-4 py-3 text-neutral-700 dark:text-neutral-300",
                                            column.className
                                        )}
                                    >
                                        {/* Handle special formatting for certain columns like 'Prop' or 'Type' */}
                                        {column.accessor === "prop" ? (
                                            <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-xs font-semibold text-black dark:bg-neutral-800 dark:text-white">
                                                {row[column.accessor]}
                                            </code>
                                        ) : column.accessor === "type" ? (
                                            <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400">
                                                {row[column.accessor]}
                                            </span>
                                        ) : (
                                            row[column.accessor]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
