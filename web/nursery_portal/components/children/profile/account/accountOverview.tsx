import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { calculateAge } from "@/lib/utils";
import { FileText, Users } from "lucide-react"

interface AccountOverviewProps {
    child: {
        first_name: string;
        last_name: string;
        parent1_name?: string;
        date_of_birth: string;
        room: string;
    };
}

function AccountOverview({ child }: AccountOverviewProps) {
    const age = calculateAge(child.date_of_birth);
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" /> Family Account Overview
                </h3>
                <Button variant="outline" className="rounded-xl">
                <FileText className="w-4 h-4 mr-2" /> View Full Account
                </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                <p className="text-xs text-slate-500 mb-1">Bill payer</p>
                <p className="font-medium text-slate-800">{child.parent1_name || '-'}</p>
                </div>
                <div>
                <p className="text-xs text-slate-500 mb-1">Payment Method</p>
                <p className="font-medium text-slate-800">Direct Debit</p>
                </div>
                <div>
                <p className="text-xs text-slate-500 mb-1">Billing Day</p>
                <p className="font-medium text-slate-800">1st of month</p>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm font-medium text-slate-700 mb-3">Children on Account</p>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white">
                    {child.first_name?.[0]}{child.last_name?.[0]}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-medium text-slate-800">{child.first_name} {child.last_name}</p>
                    <p className="text-xs text-slate-500">{child.room} • {age}</p>
                </div>
                <Badge className="ml-auto bg-emerald-100 text-emerald-700">Active</Badge>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl mt-2">
                <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-to-br from-violet-400 to-purple-500 text-white">
                    EJ
                    </AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-medium text-slate-800">Emily Johnson</p>
                    <p className="text-xs text-slate-500">Tots Room • 2 years</p>
                </div>
                <Badge className="ml-auto bg-emerald-100 text-emerald-700">Active</Badge>
                </div>
            </div>
        </div>
    )
}

export default AccountOverview