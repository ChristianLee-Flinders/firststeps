'use client'
import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { navItems } from '@/lib/navigation'
import { usePathname } from 'next/navigation'
import { createPageUrl } from '@/lib/utils'

interface UserType {
  avatar_url?: string | null
  full_name?: string
  email?: string
}

interface LocationType {
  name?: string
  address?: string
  email?: string
}

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
  user?: UserType
  location?: LocationType
}

export default function Sidebar({ sidebarOpen, setSidebarOpen, user, location }: SidebarProps) {
  const pathname = usePathname() ?? '/'
  const trimmedPath = pathname.replace(/^\/+/, '').toLowerCase()

  return (
    <>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
            fixed top-0 left-0 z-50 h-full w-72 bg-white/80 backdrop-blur-xl border-r border-slate-200/60
            transform transition-transform duration-300 ease-out
            lg:translate-x-0
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            shadow-xl lg:shadow-none
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="px-6 py-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-200">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path
                    d="M12 2C12 2 12 8 12 10C12 12 10 14 8 14C6 14 4 12 4 10C4 8 6 6 8 6C9 6 10 6.5 10.5 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 10C12 10 14 8 16 8C18 8 20 10 20 12C20 14 18 16 16 16C14 16 12 14 12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path d="M12 22V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800">First Steps</h1>
                <p className="text-xs text-slate-500">Nursery Portal</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1.5">
              {navItems.map((item) => {
                const itemPage = String(item.page ?? '').replace(/^\/+/, '').toLowerCase()
                const itemUrl = createPageUrl(item.page)
                const isActive =
                  itemPage === ''
                    ? trimmedPath === '' // home/root
                    : trimmedPath === itemPage || trimmedPath.startsWith(itemPage + '/')

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
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-slate-100">
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-50">
              <Avatar className="h-9 w-9 ring-2 ring-emerald-100">
                <AvatarImage src={user?.avatar_url ?? undefined} />
                <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-sm">
                  {user?.full_name?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 truncate">{location?.name || 'Location'}</p>
                <p className="text-xs text-slate-500 truncate">{location?.address || 'Address'}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}