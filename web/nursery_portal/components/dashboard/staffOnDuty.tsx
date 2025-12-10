import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from 'lucide-react';

interface StaffMember {
  id: number;
  first_name: string;
  last_name: string;
  room: string;
  avatar_url?: string | null;
  check_in: string;
}

interface StaffOnDutyProps {
  staff?: StaffMember[];
}

export default function StaffOnDuty({ staff = [] }: StaffOnDutyProps) {
  const sampleStaff = staff.length > 0 ? staff : [
    { id: 1, first_name: 'Sarah', last_name: 'Johnson', room: 'Butterflies', avatar_url: null, check_in: '07:45' },
    { id: 2, first_name: 'Michael', last_name: 'Chen', room: 'Caterpillars', avatar_url: null, check_in: '08:00' },
    { id: 3, first_name: 'Emma', last_name: 'Williams', room: 'Ladybirds', avatar_url: null, check_in: '07:30' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Staff On Duty</h3>
        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
          {sampleStaff.length} active
        </Badge>
      </div>
      <div className="space-y-3">
        {sampleStaff.slice(0, 4).map((member) => (
          <div 
            key={member.id}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <Avatar className="h-10 w-10 ring-2 ring-emerald-100">
              <AvatarImage src={member.avatar_url || undefined} />
              <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-sm">
                {member.first_name?.[0]}{member.last_name?.[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm text-slate-800">
                {member.first_name} {member.last_name}
              </p>
              <p className="text-xs text-slate-500">{member.room}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-emerald-600">
              <CheckCircle className="w-3 h-3" />
              <span>{member.check_in}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}