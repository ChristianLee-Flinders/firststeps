'use client'
import ChildrenTable from '@/components/children/childrenTable'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import PageHeader from '@/components/ui/pageHeader.tsx'
import { dummyChildren } from '@/lib/dummyData/children'
import { createPageUrl } from '@/lib/utils'
import { Download, FileSpreadsheet, FileText, Plus, Tag } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

function Children() {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [exportType, setExportType] = useState<string | null>(null)

  return (
    <div>
      
      <PageHeader title="Children" description={`${dummyChildren.length} children enrolled`}>

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

        <Link href={createPageUrl('ChildForm')}>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Child
          </Button>
        </Link>
      </PageHeader>
      <ChildrenTable onSelectionChange={setSelectedIds} />
    </div>
  )
}

export default Children