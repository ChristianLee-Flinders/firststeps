'use client'
import React from 'react'
import { financeNavItems, navItems, organisationNavItems } from '@/lib/navigation'
import SidebarNav from './SidebarNav'
import NurserySwitcher from '../ui/nurserySwitcher'
import Logo from '../ui/logo'

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
              <Logo/>
            </div>
          </div>

          {/* Navigation - reused component */}
          <div className="flex-1 flex flex-col overflow-y-scroll">
            <div>
              <SidebarNav items={organisationNavItems} onNavigate={() => setSidebarOpen(false)} title="organisation" />
              <SidebarNav items={navItems} onNavigate={() => setSidebarOpen(false)} title="nursery" />
              <SidebarNav items={financeNavItems} onNavigate={() => setSidebarOpen(false)} title="finance" />
            </div>
          </div>
          

          {/* Nursery section */}
          <div className=" border-t border-slate-100">
            <NurserySwitcher currentNursery={location} className="" />
          </div>
        </div>
      </aside>
    </>
  )
}