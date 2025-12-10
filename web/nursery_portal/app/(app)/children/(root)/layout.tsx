import SubNav from '@/components/navigation/subNav';
import { childrenNavItems } from '@/lib/navigation';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div>
            {/* SubNav is a client component and will derive the current path itself */}
            <SubNav items={childrenNavItems} />
            {children}
        </div>
    );
}