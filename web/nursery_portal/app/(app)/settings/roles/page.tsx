import SettingsPageTitle from '@/components/settings/pageTitle'
import SettingsSection from '@/components/settings/settingsSection'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { dummyRoles } from '@/lib/dummyData/roles'
import { createPageUrl } from '@/lib/utils'
import { Check, Edit, Plus, Shield, X } from 'lucide-react'
import Link from 'next/link'

const PERMISSION_AREAS = [
  { key: 'children', label: 'Children' },
  { key: 'staff', label: 'Staff' },
  { key: 'attendance', label: 'Attendance' },
  { key: 'learning_logs', label: 'Learning Logs' },
  { key: 'finance', label: 'Finance' },
  { key: 'settings', label: 'Settings' },
  { key: 'users', label: 'Users' },
  { key: 'nurseries', label: 'Nurseries' },
];


function RolesPage() {
    const roles = dummyRoles;

    const getPermissionCount = (role: typeof dummyRoles[0]) => {
        if (!role.permissions) return 0;
        let count = 0;
        Object.values(role.permissions).forEach(area => {
        Object.values(area || {}).forEach(v => { if (v) count++; });
        });
        return count;
    };

    return (
        <>
            <SettingsPageTitle title={'Roles & Permissions'} description={'Define what each role can access in the system'} />

            <SettingsSection
            title="Roles"
            description="Create and manage custom roles"
            actions={
                <Link href={createPageUrl('Roles')}>
                <Button size="sm" className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Role
                </Button>
                </Link>
            }
            >
                {roles.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">
                    No custom roles configured
                    </div>
                ): (
                    <div className="space-y-3">
                        {roles.map(role => (
                            <div
                            key={role.id}
                            className="p-4 rounded-xl bg-slate-50"
                            >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-violet-100">
                                    <Shield className="w-5 h-5 text-violet-600" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-slate-800">{role.name}</h3>
                                    <p className="text-sm text-slate-500">{role.description || 'No description'}</p>
                                </div>
                                </div>
                                <div className="flex items-center gap-2">
                                {role.is_system_role && (
                                    <Badge variant="outline" className="text-slate-500">System</Badge>
                                )}
                                <Badge className="bg-slate-100 text-slate-600">
                                    {getPermissionCount(role)} permissions
                                </Badge>
                                <Link href={createPageUrl(`Roles?edit=${role.id}`)}>
                                    <Button variant="ghost" size="icon" className="rounded-xl">
                                    <Edit className="w-4 h-4 text-slate-400" />
                                    </Button>
                                </Link>
                                </div>
                            </div>
                            
                            {/* Permission Overview */}
                            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-slate-200">
                                {PERMISSION_AREAS.map(area => {
                                    const perms = role.permissions?.[area.key as keyof typeof role.permissions];
                                    const hasAny = perms && Object.values(perms).some(v => v);
                                    return (
                                        <Badge 
                                        key={area.key}
                                        variant="outline"
                                        className={hasAny ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'text-slate-400'}
                                        >
                                        {hasAny ? <Check className="w-3 h-3 mr-1" /> : <X className="w-3 h-3 mr-1" />}
                                        {area.label}
                                        </Badge>
                                    );
                                })}
                            </div>
                            </div>
                        ))}
                    </div>
                )}
                
            </SettingsSection>
        </>
    )
}

export default RolesPage