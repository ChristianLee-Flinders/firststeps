'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createPageUrl } from '@/lib/utils'

export type NavItem = {
  name?: string
  icon: React.ComponentType<any>
  page: string | null
}

type SidebarNavProps = {
  items: NavItem[]
  onNavigate?: () => void
  title?: string
  className?: string
}

export default function SidebarNav({ items, onNavigate, title, className }: SidebarNavProps) {
  const pathname = usePathname() ?? '/'
  const trimmedPath = pathname.replace(/^\/+/, '').toLowerCase()

  return (
    <nav className={`p-4 overflow-y-auto ${className}`}>
        {title && <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">{title}</h2>}
      <ul className="space-y-1.5">
        {items.map((item) => {
          const itemPage = String(item.page ?? '').replace(/^\/+/, '').toLowerCase()
          const itemUrl = createPageUrl(item.page || '')
          const isActive =
            itemPage === ''
              ? trimmedPath === '' // home/root
              : trimmedPath === itemPage || trimmedPath.startsWith(itemPage + '/')

          const Icon = item.icon

          return (
            <li key={item.page ?? item.name}>
              <Link
                href={itemUrl}
                className={`
                  sidebar-link flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                  ${isActive
                    ? 'active text-white border-r-4 border-primary pr-2'
                    : 'text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'}
                `}
                onClick={() => onNavigate?.()}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}