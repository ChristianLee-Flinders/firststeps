'use client'
import React, { useState } from 'react'
import Sidebar from '@/components/navigation/sidebar'
import Topbar from '../navigation/topbar'

export default function ClientShell({
  children,
  user,
  location,
}: {
  children: React.ReactNode
  user: any
  location: any
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Sidebar user={user} location={location} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="lg:ml-72">
        <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </>
  )
}