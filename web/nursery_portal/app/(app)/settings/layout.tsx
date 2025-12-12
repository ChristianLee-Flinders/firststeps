'use client'
import { settingsnavItems } from "@/lib/navigation";
import { cn, createPageUrl, getIconByName } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() ?? '/'
    const trimmedPath = pathname.replace(/^\/+/, '').toLowerCase()

    return (
        <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <aside className="lg:w-72 shrink-0">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden sticky top-24">
            <div className="p-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Settings</h2>
                <p className="text-xs text-slate-500 mt-1">Manage your application</p>
            </div>
            <nav className="p-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                {settingsnavItems.map((section) => (
                <div key={section.group} className="mb-4">
                    <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {section.group}
                    </p>
                    <ul className="space-y-1">
                    {section.items.map((item) => {
                        const itemPage = String(item.page ?? '').replace(/^\/+/, '').toLowerCase()
                        const isActive = itemPage === '' ? trimmedPath === '' : trimmedPath === itemPage
                        const Icon = getIconByName(item.icon);
                        return (
                        <li key={item.page}>
                            <Link
                            href={createPageUrl(item.page)}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all",
                                isActive
                                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm"
                                : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                            )}
                            >
                            <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-slate-400")} />
                            <span className="flex-1">{item.name}</span>
                            {isActive && <ChevronRight className="w-4 h-4" />}
                            </Link>
                        </li>
                        );
                    })}
                    </ul>
                </div>
                ))}
            </nav>
            </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
            <div className="space-y-6">
                {children}
            </div>
        </main>
        </div>
    )
}

export default Layout