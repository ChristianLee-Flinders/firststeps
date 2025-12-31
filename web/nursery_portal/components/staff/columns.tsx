import { ColumnDef } from "@tanstack/react-table"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { calculateAge, createPageUrl } from "@/lib/utils";
import StatusBadge from "../ui/statusBadge";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { Staff } from "@/lib/dummyData/staff";

export type ColumnsDeps = {
  selectedIds: string[]
  filteredStaff: Staff[]
  toggleSelectAll: () => void
  toggleRowSelection: (id: string) => void
}

export function getStaffColumns({ selectedIds, filteredStaff, toggleSelectAll, toggleRowSelection }: ColumnsDeps): ColumnDef<Staff>[] {
    return [
        {
            id: 'select',
            header: () => (
              <Checkbox
                checked={selectedIds.length === filteredStaff.length && filteredStaff.length > 0}
                onCheckedChange={toggleSelectAll}
              />
            ),
            cell: ({ row }) => (
              <Checkbox
                checked={selectedIds.includes(row.original.id!)}
                onCheckedChange={() => toggleRowSelection(row.original.id!)}
              />
            ),
        },
        {
            id: 'staff',
            header: 'Staff Member',
            cell: ({ row }) => {
                return (
                <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 ring-2 ring-emerald-100">
                        <AvatarImage src={row.original.avatar_url ?? undefined} />
                        <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-sm">
                        {row.original.first_name?.[0]}{row.original.last_name?.[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-medium text-slate-800">{row.original.first_name} {row.original.last_name}</p>
                        <p className="text-xs text-slate-500">{row.original.job_title}</p>
                    </div>
                </div>
                );
    
            }
        },
        {
            id: 'room',
            header: 'Room',
            cell: ({ row }) => <span className="text-slate-600">{row.original.room || '-'}</span>
        },
        {
            accessorKey: 'contact',
            header: 'Contact',
            cell: ({ row }) => (
                <div>
              <p className="text-slate-800">{row.original.email}</p>
              <p className="text-xs text-slate-500">{row.original.phone}</p>
            </div>
            )
        },
        {
            id: 'dbs_status',
            header: 'DBS Status',
            cell: ({ row }) => <StatusBadge status={row.original.dbs_status || 'not_submitted'} />
        },
        {
            id: 'status',
            header: 'Status',
            cell: ({ row }) => <StatusBadge status={row.original.status || 'Registered'} />
        },
        {
            id: 'actions',
            header: '',
            cell: ({ row }) => 
            <Link href={createPageUrl(`staff/${row.original.id}`)}>
                <Button variant="ghost" size="lg" className="rounded-xl">
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                </Button>
            </Link>
        }
    ]
}