'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createPageUrl, getIconByName } from '@/lib/utils'

export type NavItem = {
  name?: string
  icon: string
  page: string | null
}

type SidebarNavProps = {
  items: NavItem[]
  onNavigate?: () => void
  title?: string
  className?: string
}

function normalize(p?: string | null) {
  return String(p ?? '').replace(/^\/+/, '').replace(/\/+$/, '').toLowerCase()
}

export default function SidebarNav({ items, onNavigate, title, className }: SidebarNavProps) {
  const pathname = usePathname() ?? '/'
  const trimmedPath = normalize(pathname)

  // prepare normalized items
  const normItems = items.map((it) => ({ ...it, normPage: normalize(it.page) }))

  // 1) exact match preferred
  const exact = normItems.find((it) => it.normPage === trimmedPath)

  // 2) if no exact match, find the longest matching prefix (parent)
  let activeNormPage: string | null = exact ? exact.normPage : null
  if (!activeNormPage) {
    const candidates = normItems
      .filter((it) => it.normPage !== '' && trimmedPath.startsWith(it.normPage + '/'))
      .sort((a, b) => b.normPage.length - a.normPage.length)
    if (candidates.length > 0) activeNormPage = candidates[0].normPage
  }

  return (
    <nav className={`px-4 py-3 overflow-y-auto ${className ?? ''}`}>
      {title && <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{title}</h2>}
      <ul className="space-y-1.5">
        {normItems.map((item) => {
          const itemPage = item.normPage
          const itemUrl = createPageUrl(item.page || '')
          const isActive =
            itemPage === ''
              ? trimmedPath === '' // home/root
              : itemPage === activeNormPage

          const Icon = getIconByName(item.icon)

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