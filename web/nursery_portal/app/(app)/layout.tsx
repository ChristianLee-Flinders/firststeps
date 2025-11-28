import React from 'react';
import ClientShell from '@/components/shell/ClientShell';

export default function Layout({ children }: { children: React.ReactNode }) {

    const user = {
        avatar_url: null,
        full_name: 'Demo User',
        email: 'demo@example.com',
    }

    const location = {
        name: 'Demo Nursery',
        address: '123 Demo St, Sample City',
        email: 'contact@demonursery.com',
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20">
        <style>{`
            :root {
            --primary: 158 64% 40%;
            --primary-foreground: 0 0% 100%;
            --accent: 158 50% 95%;
            }
            .sidebar-link {
            transition: all 0.2s ease;
            }
            .sidebar-link:hover {
            transform: translateX(4px);
            }
            .sidebar-link.active {
            background: linear-gradient(135deg, #3d9970 0%, #2d8659 100%);
            box-shadow: 0 4px 12px rgba(61, 153, 112, 0.3);
            }
        `}</style>

        {/* render client-only shell that owns sidebar state */}
        <ClientShell user={user} location={location}>
            {children}
        </ClientShell>
        </div>
    );
}