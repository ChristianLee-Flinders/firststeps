import { Badge } from "@/components/ui/badge";

type StatusConfig = {
  [key: string]: {
    label: string;
    class: string;
  };
};

const statusConfig: StatusConfig = {
  // Generic statuses
  active: { label: 'Active', class: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  inactive: { label: 'Inactive', class: 'bg-slate-100 text-slate-600 border-slate-200' },
  pending: { label: 'Pending', class: 'bg-amber-100 text-amber-700 border-amber-200' },
  
  // Attendance statuses
  present: { label: 'Present', class: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  absent: { label: 'Absent', class: 'bg-rose-100 text-rose-700 border-rose-200' },
  late: { label: 'Late', class: 'bg-amber-100 text-amber-700 border-amber-200' },
  sick: { label: 'Sick', class: 'bg-orange-100 text-orange-700 border-orange-200' },
  holiday: { label: 'Holiday', class: 'bg-blue-100 text-blue-700 border-blue-200' },
  
  // Invoice statuses
  draft: { label: 'Draft', class: 'bg-slate-100 text-slate-600 border-slate-200' },
  sent: { label: 'Sent', class: 'bg-blue-100 text-blue-700 border-blue-200' },
  paid: { label: 'Paid', class: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  overdue: { label: 'Overdue', class: 'bg-rose-100 text-rose-700 border-rose-200' },
  cancelled: { label: 'Cancelled', class: 'bg-slate-100 text-slate-600 border-slate-200' },
  
  // DBS statuses
  clear: { label: 'Clear', class: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  expired: { label: 'Expired', class: 'bg-rose-100 text-rose-700 border-rose-200' },
  not_submitted: { label: 'Not Submitted', class: 'bg-slate-100 text-slate-600 border-slate-200' },
  
  // Staff statuses
  on_leave: { label: 'On Leave', class: 'bg-blue-100 text-blue-700 border-blue-200' },
  
  // Child statuses
  waitlist: { label: 'Waitlist', class: 'bg-violet-100 text-violet-700 border-violet-200' },
  registered: { label: 'Registered', class: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  left: { label: 'Left', class: 'bg-rose-100 text-rose-700 border-rose-200' },
  
  // Ofsted ratings
  outstanding: { label: 'Outstanding', class: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  good: { label: 'Good', class: 'bg-blue-100 text-blue-700 border-blue-200' },
  requires_improvement: { label: 'Requires Improvement', class: 'bg-amber-100 text-amber-700 border-amber-200' },
  inadequate: { label: 'Inadequate', class: 'bg-rose-100 text-rose-700 border-rose-200' },
  not_rated: { label: 'Not Rated', class: 'bg-slate-100 text-slate-600 border-slate-200' },
  
  // Announcement types
  info: { label: 'Info', class: 'bg-blue-100 text-blue-700 border-blue-200' },
  warning: { label: 'Warning', class: 'bg-amber-100 text-amber-700 border-amber-200' },
  urgent: { label: 'Urgent', class: 'bg-rose-100 text-rose-700 border-rose-200' },
  celebration: { label: 'Celebration', class: 'bg-violet-100 text-violet-700 border-violet-200' },
};

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status] || { 
    label: status?.replace(/_/g, ' '), 
    class: 'bg-slate-100 text-slate-600 border-slate-200' 
  };

  return (
    <Badge 
      variant="outline"
      className={`${config.class} font-medium border capitalize ${className}`}
    >
      {config.label}
    </Badge>
  );
}