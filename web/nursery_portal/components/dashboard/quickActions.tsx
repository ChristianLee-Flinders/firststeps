import { createPageUrl } from '@/lib/utils';
import { Baby, CalendarOff, BookOpen, FileText } from 'lucide-react';
import Link from 'next/link';

const actions = [
  { 
    label: 'Add Child', 
    icon: Baby, 
    page: 'ChildForm',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-500'
  },
  { 
    label: 'Register Absence', 
    icon: CalendarOff, 
    page: 'Attendance',
    color: 'rose',
    gradient: 'from-rose-500 to-pink-500'
  },
  { 
    label: 'Add Learning Log', 
    icon: BookOpen, 
    page: 'LearningLogForm',
    color: 'violet',
    gradient: 'from-violet-500 to-purple-500'
  },
  { 
    label: 'Staff Note', 
    icon: FileText, 
    page: 'Staff',
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-500'
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wider">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={createPageUrl(action.page)}
            className={`
              group flex flex-col items-center gap-2 p-4 rounded-xl
              bg-gradient-to-br ${action.gradient} bg-opacity-10
              hover:scale-105 transition-all duration-200
              border border-transparent hover:border-slate-200
              hover:shadow-lg
            `}
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.95))`
            }}
          >
            <div className={`p-3 rounded-xl bg-gradient-to-br ${action.gradient} shadow-lg`}>
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-medium text-slate-700 text-center">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}