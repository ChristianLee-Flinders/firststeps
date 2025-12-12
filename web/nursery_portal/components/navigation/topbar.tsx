'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Bell, ChevronDown, LogOut, Menu, X, Search, Settings, User, CircleQuestionMark } from 'lucide-react'
import { Input } from '../ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type UserType = {
  avatar_url?: string | null
  full_name?: string
  email?: string
}

type TopbarProps = {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
  user?: UserType
  onLogout?: () => void
}

export default function Topbar({ sidebarOpen, setSidebarOpen, user, onLogout }: TopbarProps) {
  return (
    <>
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-xl border-b border-slate-200/60">
        <div className="flex items-center justify-between px-4 lg:px-8 h-16">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search children, staff, records..."
                className="pl-10 bg-slate-50/50 border-slate-200 focus:bg-white rounded-xl"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-1">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative rounded-xl">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full" />
            </Button>

            <Button variant="ghost" size="icon" className="relative rounded-xl" onClick={() => window.location.href = '/settings'}>
              <Settings className="w-5 h-5 text-slate-600" />
            </Button>

            <Button variant="ghost" size="icon" className="relative rounded-xl">
              <CircleQuestionMark className="w-5 h-5 text-slate-600" />
            </Button>

            {/* User dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 rounded-xl px-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar_url ?? undefined} />
                    <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-xs">
                      {user?.full_name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-xl">
                <div className="px-3 py-2">
                  <p className="font-medium text-sm">{user?.full_name}</p>
                  <p className="text-xs text-slate-500">{user?.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="rounded-lg cursor-pointer">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg cursor-pointer">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="rounded-lg cursor-pointer text-rose-600 focus:text-rose-600"
                  onClick={() => onLogout?.()}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  )
}