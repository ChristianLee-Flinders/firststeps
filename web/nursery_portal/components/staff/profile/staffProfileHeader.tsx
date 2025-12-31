import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import StatusBadge from '@/components/ui/statusBadge'
import { calculateAge, createPageUrl } from '@/lib/utils'
import { Calendar, Edit, BriefcaseBusiness, House } from 'lucide-react'
import Link from 'next/link'

interface ProfileHeaderProps {
  staff: {
    id: string
    first_name: string
    last_name: string
    avatar_url?: string
    room?: string
    start_date?: string
    status?: string
    job_title?: string
  }
}

export default function StaffProfileHeader({ staff }: ProfileHeaderProps) {
    const timeInRole = calculateAge(staff.start_date || '', 'long');
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 h-28 relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMTAgMGExMCAxMCAwIDEgMCAyMCAwYTEwIDEwIDAgMSAwLTIwIDAiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30" />
            </div>
            <div className="px-6 pb-6 -mt-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6">
                <div className="flex items-end gap-4">
                <Avatar className="h-28 w-28 ring-4 ring-white shadow-xl">
                    <AvatarImage src={staff.avatar_url} />
                    <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-3xl font-bold">
                    {staff.first_name?.[0]}{staff.last_name?.[0]}
                    </AvatarFallback>
                </Avatar>
                </div>
                
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 my-2 ">
                        <h1 className="text-3xl font-bold text-slate-800">
                            {staff.first_name} {staff.last_name}
                        </h1>
                        <StatusBadge status={staff.status || 'active'} />
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1.5">
                        <BriefcaseBusiness className="w-4 h-4 text-emerald-600" />
                        {staff.job_title || '-'}
                        </span>
                        <span className="flex items-center gap-1.5">
                        <House className="w-4 h-4 text-blue-600" />
                        {staff.room || '-'}
                        </span>
                        <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-violet-600" />
                         {timeInRole} in role
                        </span> 
                    </div>
                </div>

                <Link href={createPageUrl(`StaffForm?id=${staff.id}`)}>
                <Button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg transition-shadow">
                    <Edit className="w-4 h-4 mr-2" /> Edit Profile
                </Button>
                </Link>
            </div>
            </div>
        </div>
    )
}