import StatusBadge from '@/components/ui/statusBadge';
import { calculateAge } from '@/lib/utils';
import { format } from 'date-fns';
import { User } from 'lucide-react'

interface InfoRowProps {
  label: string;
  value: React.ReactNode;

}

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex justify-between items-center py-1.5">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-medium text-slate-800 capitalize">{value}</span>
    </div>
  );
}

interface OverviewProfileProps {
  child: {
    date_of_birth: string;
    gender?: string;
    enrollment_date?: string;
    room: string;
    status: string;
  };
}
function OverviewProfile({ child }: OverviewProfileProps) {
    const age = calculateAge(child.date_of_birth);
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-emerald-600" /> Profile Information
            </h3>
            <div className="space-y-3">
                <InfoRow label="Date of Birth" value={child.date_of_birth ? format(new Date(child.date_of_birth), 'dd MMMM yyyy') : '-'} />
                <InfoRow label="Age" value={age} />
                <InfoRow label="Gender" value={child.gender || '-'} />
                <InfoRow label="Enrolled" value={child.enrollment_date ? format(new Date(child.enrollment_date), 'dd MMM yyyy') : '-'} />
                <InfoRow label="Room" value={child.room || '-'} />
                <InfoRow label="Key Person" value="Sarah Thompson" />
                <InfoRow label="Status" value={<StatusBadge status={child.status || 'active'} className="text-xs" />} />
            </div>
        </div>
    )
}

export default OverviewProfile