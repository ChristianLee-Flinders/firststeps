import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

interface OverviewQuickStatsProps {
  child: {
    funding_type?: string;
  };
}

const dummyAttendance = [
  { date: '2024-09-01', status: 'present' },
  { date: '2024-09-02', status: 'present' },
  { date: '2024-09-03', status: 'absent' },
  { date: '2024-09-04', status: 'present' },
  { date: '2024-09-05', status: 'present' },
  { date: '2024-09-06', status: 'present' },
  { date: '2024-09-07', status: 'absent' },
];

const dummyLearningLogs = [
  { id: 1, title: 'Learning Log 1' },
  { id: 2, title: 'Learning Log 2' },
  { id: 3, title: 'Learning Log 3' },
  { id: 4, title: 'Learning Log 4' },
];

function OverviewQuickStats({ child }: OverviewQuickStatsProps) {
    const attendance = dummyAttendance;
    const learningLogs = dummyLearningLogs;
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-violet-600" /> Quick Stats
            </h3>
            <div className="space-y-4">
            <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Attendance Rate</span>
                <span className="text-lg font-bold text-emerald-600">94%</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Days Present</span>
                <span className="text-lg font-bold text-slate-800">{attendance.filter(a => a.status === 'present').length}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Learning Logs</span>
                <span className="text-lg font-bold text-violet-600">{learningLogs.length}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Funding</span>
                <Badge className="bg-emerald-100 text-emerald-700 text-xs">
                    {child.funding_type?.replace(/_/g, ' ') || 'None'}
                </Badge>
            </div>
            </div>
        </div>
    )
}

export default OverviewQuickStats