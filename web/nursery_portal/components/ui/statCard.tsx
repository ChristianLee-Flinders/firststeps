import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  trend?: 'up' | 'down';
  trendValue?: string | number;
  color?: 'emerald' | 'blue' | 'amber' | 'rose' | 'violet';
  className?: string;
}

export default function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendValue,
  color = 'emerald',
  className = ''
}: StatCardProps) {
  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-50',
      iconBg: 'bg-emerald-100',
      icon: 'text-emerald-600',
      gradient: 'from-emerald-500 to-teal-500'
    },
    blue: {
      bg: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      icon: 'text-blue-600',
      gradient: 'from-blue-500 to-indigo-500'
    },
    amber: {
      bg: 'bg-amber-50',
      iconBg: 'bg-amber-100',
      icon: 'text-amber-600',
      gradient: 'from-amber-500 to-orange-500'
    },
    rose: {
      bg: 'bg-rose-50',
      iconBg: 'bg-rose-100',
      icon: 'text-rose-600',
      gradient: 'from-rose-500 to-pink-500'
    },
    violet: {
      bg: 'bg-violet-50',
      iconBg: 'bg-violet-100',
      icon: 'text-violet-600',
      gradient: 'from-violet-500 to-purple-500'
    }
  };

  const colors = colorClasses[color] || colorClasses.emerald;

  return (
    <div className={`
      relative overflow-hidden bg-white rounded-2xl p-6 
      border border-slate-100 shadow-sm hover:shadow-md transition-shadow
      ${className}
    `}>
      {/* Decorative gradient blob */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-full blur-2xl`} />
      
      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
            <p className="text-3xl font-bold text-slate-800">{value}</p>
          </div>
          <div className={`p-3 rounded-xl ${colors.iconBg}`}>
            {Icon && <Icon className={`w-6 h-6 ${colors.icon}`} />}
          </div>
        </div>
        
        {trend && (
          <div className="flex items-center gap-1.5 mt-4">
            {trend === 'up' ? (
              <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>{trendValue}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-rose-600 text-sm font-medium">
                <TrendingDown className="w-4 h-4" />
                <span>{trendValue}</span>
              </div>
            )}
            <span className="text-slate-400 text-sm">vs last week</span>
          </div>
        )}
      </div>
    </div>
  );
}