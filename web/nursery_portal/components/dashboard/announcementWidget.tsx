import { Megaphone, AlertTriangle, Info, PartyPopper, ChevronRight } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface Announcement {
  id: string;
  type: 'info' | 'warning' | 'urgent' | 'celebration';
  title: string;
  content: string;
}

interface AnnouncementWidgetProps {
  announcements: Announcement[];
}

const typeConfig = {
  info: { icon: Info, color: 'bg-blue-100 text-blue-600', badge: 'bg-blue-100 text-blue-700' },
  warning: { icon: AlertTriangle, color: 'bg-amber-100 text-amber-600', badge: 'bg-amber-100 text-amber-700' },
  urgent: { icon: Megaphone, color: 'bg-rose-100 text-rose-600', badge: 'bg-rose-100 text-rose-700' },
  celebration: { icon: PartyPopper, color: 'bg-violet-100 text-violet-600', badge: 'bg-violet-100 text-violet-700' },
};

export default function AnnouncementWidget({ announcements }: AnnouncementWidgetProps) {
  if (!announcements || announcements.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Announcements</h3>
        </div>
        <div className="text-center py-8 text-slate-400">
          <Megaphone className="w-10 h-10 mx-auto mb-2 opacity-40" />
          <p className="text-sm">No announcements</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Announcements</h3>
        <Badge variant="secondary" className="bg-slate-100 text-slate-600">
          {announcements.length} new
        </Badge>
      </div>
      <div className="space-y-3">
        {announcements.slice(0, 3).map((announcement) => {
          const config = typeConfig[announcement.type] || typeConfig.info;
          const Icon = config.icon;
          return (
            <div 
              key={announcement.id}
              className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className={`p-2 rounded-lg ${config.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-slate-800 truncate">{announcement.title}</p>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{announcement.content}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors mt-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
}