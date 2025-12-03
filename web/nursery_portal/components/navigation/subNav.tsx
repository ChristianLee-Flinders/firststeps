'use client'
import React from 'react'
import Link from 'next/link'
import { Menu, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { createPageUrl } from '@/lib/utils'
import * as Icons from 'lucide-react'

export interface SubNavItem {
  name: string
  page: string
  icon: string
  group?: string
}

type SubNavProps = {
  items: SubNavItem[]
  currentPage?: string | null
}

function normalizePath(p: string | null | undefined) {
  if (!p) return ''
  return String(p).replace(/^\/+/, '').replace(/\/+$/, '').toLowerCase()
}

function getIconByName(name?: string) {
  if (!name) return Icons.FileText // fallback
  // Types: Icons[name] may be undefined; cast to any to render
  return (Icons as any)[name] ?? Icons.FileText
}

export default function SubNav({ items, currentPage }: SubNavProps) {
  const primaryItems = items.slice(0, 4)
  const moreItems = items.slice(4)

  // use provided currentPage if present, otherwise derive from location
  const provided = normalizePath(currentPage)
  let normalizedCurrent = provided

  if (!provided) {
    // dynamic fallback to client pathname when prop not given
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { usePathname } = require('next/navigation')
      const pathname = normalizePath(usePathname?.() ?? '')
      normalizedCurrent = pathname
    } catch {
      normalizedCurrent = ''
    }
  }

  const allItems = items
  const currentItem = allItems.find((i) => normalizePath(i.page) === normalizedCurrent) ?? null
  const isInMore = moreItems.some((i) => normalizePath(i.page) === normalizedCurrent)

  const grouped = moreItems.reduce<Record<string, SubNavItem[]>>((acc, item) => {
    const key = item.group ?? 'Other'
    if (!acc[key]) acc[key] = []
    acc[key].push(item)
    return acc
  }, {})

  return (
    <div className="bg-white rounded-xl border border-slate-100 p-1.5 mb-6">
      <div className="flex items-center gap-1">
        {/* Primary Items - first 4 */}
        {primaryItems.map((item) => {
          const isActive = normalizePath(item.page) === normalizedCurrent
          const Icon = getIconByName(item.icon)
          return (
            
            <Link
              key={item.page ?? item.name}
              href={createPageUrl(item.page)}
              className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${isActive
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'}`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          )
        })}

        {/* More dropdown (contains remaining items) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={isInMore ? 'default' : 'ghost'}
              size="sm"
              className={`gap-1 rounded-lg ml-auto ${isInMore ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm hover:from-emerald-600 hover:to-teal-600' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              {isInMore && currentItem ? (
                <>
                  {(() => {
                    const CurrentIcon = getIconByName(currentItem.icon)
                    return <CurrentIcon className="w-4 h-4" />
                  })()}
                  <span className="hidden sm:inline">{currentItem.name}</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4" />
                  <span className="hidden sm:inline">More</span>
                </>
              )}
              <ChevronDown className="w-3 h-3" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48 rounded-xl">
            {Object.entries(grouped).map(([groupName, itemsInGroup], idx, arr) => (
              <React.Fragment key={groupName}>
                <DropdownMenuLabel className="text-xs text-slate-400">{groupName}</DropdownMenuLabel>

                {itemsInGroup.map((mi) => (
                  <DropdownMenuItem key={mi.page} asChild className="cursor-pointer rounded-lg">
                    <Link href={createPageUrl(mi.page)} className="flex items-center gap-2">
                      {(() => {
                        const Icon = getIconByName(mi.icon)
                        return <Icon className="w-4 h-4 text-slate-500" />
                      })()}
                      {mi.name}
                    </Link>
                  </DropdownMenuItem>
                ))}

                {idx < arr.length - 1 && <DropdownMenuSeparator />}
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}