'use client'
import StaffTable from "@/components/staff/staffTable"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import PageHeader from "@/components/ui/pageHeader.tsx"
import { dummyStaff } from "@/lib/dummyData/staff"
import { createPageUrl } from "@/lib/utils"
import { Download, FileSpreadsheet, FileText, Plus, Tag } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

function StaffPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [exportType, setExportType] = useState<string | null>(null)

  return (
    <div>

      <PageHeader title="Your team" description={`${dummyStaff.length} staff members`}>

        {selectedIds.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-xl gap-2">
                <Download className="w-4 h-4" />
                Export ({selectedIds.length})
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-xl">
              <DropdownMenuItem onClick={() => setExportType('csv')} className="gap-2 cursor-pointer">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                Export as CSV
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setExportType('pdf')} className="gap-2 cursor-pointer">
                <FileText className="w-4 h-4 text-blue-600" />
                Export as PDF List
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setExportType('coatpeg')} className="gap-2 cursor-pointer">
                <Tag className="w-4 h-4 text-violet-600" />
                Coat Peg Labels
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        <Link href={createPageUrl('StaffForm')}>
          <Button>
            <Plus className="w-4 h-4 mr-1" />
            Add Staff
          </Button>
        </Link>
      </PageHeader>
      <StaffTable onSelectionChange={setSelectedIds} />
    </div>
  )
}

export default StaffPage