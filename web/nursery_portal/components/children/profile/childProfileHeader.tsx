import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import StatusBadge from '@/components/ui/statusBadge'
import { calculateAge, createPageUrl } from '@/lib/utils'
import { Baby, Users, Calendar, Edit } from 'lucide-react'
import { format } from 'date-fns'
import Link from 'next/link'

interface ProfileHeaderProps {
  child: {
    id: string
    first_name: string
    last_name: string
    avatar_url?: string
    date_of_birth: string
    room: string
    enrollment_date?: string
    status?: string
  }
}

function ChildProfileHeader({ child }: ProfileHeaderProps) {
    const age = calculateAge(child.date_of_birth);
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 h-28 relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMTAgMGExMCAxMCAwIDEgMCAyMCAwYTEwIDEwIDAgMSAwLTIwIDAiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-30" />
            </div>
            <div className="px-6 pb-6 -mt-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6">
                <div className="flex items-end gap-4">
                <Avatar className="h-28 w-28 ring-4 ring-white shadow-xl">
                    <AvatarImage src={child.avatar_url} />
                    <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-3xl font-bold">
                    {child.first_name?.[0]}{child.last_name?.[0]}
                    </AvatarFallback>
                </Avatar>
                </div>
                
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 my-2 ">
                        <h1 className="text-3xl font-bold text-slate-800">
                            {child.first_name} {child.last_name}
                        </h1>
                        <StatusBadge status={child.status || 'active'} />
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1.5">
                        <Baby className="w-4 h-4 text-emerald-600" />
                        {age} old
                        </span>
                        <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-blue-600" />
                        {child.room || 'No room assigned'}
                        </span>
                        <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-violet-600" />
                        Started {child.enrollment_date ? format(new Date(child.enrollment_date), 'MMM yyyy') : '-'}
                        </span>
                    </div>
                </div>

                <Link href={createPageUrl(`ChildForm?id=${child.id}`)}>
                <Button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg transition-shadow">
                    <Edit className="w-4 h-4 mr-2" /> Edit Profile
                </Button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default ChildProfileHeader