import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Clock, RefreshCw } from "lucide-react";
import { _REPORT_STATUS, ReportStatusType } from "@/constant";
import { ReportType } from "@/features/report/reportType";

export const reportColumns: ColumnDef<ReportType>[] = [
  {
    accessorKey: "period",
    header: "Report Period",
    size: 150,
    cell: ({ row }) => {
      const period = row.getValue("period") as string;
      return (
        <div className="flex items-center gap-2 lg:!w-10">
          <Clock className="h-3.5 w-3.5 opacity-50 shrink-0" />
          <span>{period}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "sentDate",
    header: "Sent Date",
    size: 100,
    cell: ({ row }) => {
      const date = new Date(row.original.sentDate);
      return date.toLocaleDateString();
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    size: 100,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const statusStyles = {
        [_REPORT_STATUS.SENT]: "bg-primary/10 text-primary",
        [_REPORT_STATUS.FAILED]: "bg-[var(--surface-alt)] text-muted-foreground",
        [_REPORT_STATUS.PENDING]: "bg-[var(--surface-border)] text-foreground/70",
        [_REPORT_STATUS.PROCESSING]: "bg-[var(--brand-purple-tint)] text-foreground",
        [_REPORT_STATUS.NO_ACTIVITY]: "bg-[var(--surface-subtle)] text-muted-foreground",
      };

      const style =
        statusStyles[status as ReportStatusType] || "bg-[var(--surface-subtle)] text-muted-foreground";

      return (
        <span
          className={`inline-flex items-center rounded-full
         px-2.5 py-0.5 text-xs font-medium ${style}`}
        >
          {status}
        </span>
      );
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
  },
  {
    id: "actions",
    header: "Actions",
    size: 100,
    cell: () => (
      <div className="flex gap-1">
        <Button size="sm" variant="outline" className="font-normal">
          <RefreshCw className="h-4 w-4" />
          Resend
        </Button>
        <div></div>
      </div>
    ),
  },

  {
    id: "-",
    header: "",
  },
  {
    id: "-",
    header: "",
  },
];
