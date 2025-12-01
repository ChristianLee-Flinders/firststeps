'use client';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-xl shadow-lg border border-slate-100">
        <p className="text-sm font-medium text-slate-800">{label}</p>
        <p className="text-sm text-emerald-600">
          {payload[0].value} children present
        </p>
      </div>
    );
  }
  return null;
};

interface AttendanceChartProps {
  data?: { day: string; present: number }[];
}

export default function AttendanceChart({ data = [] }: AttendanceChartProps) {
  // Generate sample data if none provided
  const chartData = data.length > 0 ? data : [
    { day: 'Mon', present: 24 },
    { day: 'Tue', present: 26 },
    { day: 'Wed', present: 22 },
    { day: 'Thu', present: 28 },
    { day: 'Fri', present: 25 },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Attendance Trend</h3>
          <p className="text-xs text-slate-500 mt-1">This week's attendance overview</p>
        </div>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="present" 
              stroke="#10b981" 
              strokeWidth={3}
              fill="url(#attendanceGradient)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}