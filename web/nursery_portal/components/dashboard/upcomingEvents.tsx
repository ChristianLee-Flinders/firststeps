import { format, addDays } from 'date-fns';
import { Calendar, Clock, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  type: 'meeting' | 'safety' | 'event';
  attendees: number;
}

const sampleEvents: Event[] = [
  { 
    id: 1, 
    title: 'Parent-Teacher Meeting', 
    date: addDays(new Date(), 2), 
    time: '14:00',
    type: 'meeting',
    attendees: 12
  },
  { 
    id: 2, 
    title: 'Fire Drill Practice', 
    date: addDays(new Date(), 4), 
    time: '10:30',
    type: 'safety',
    attendees: 45
  },
  { 
    id: 3, 
    title: 'Sports Day', 
    date: addDays(new Date(), 7), 
    time: '09:00',
    type: 'event',
    attendees: 60
  },
];

const typeColors = {
  meeting: 'bg-blue-500',
  safety: 'bg-amber-500',
  event: 'bg-violet-500',
};

export default function UpcomingEvents({ events = sampleEvents }: { events?: Event[] }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Upcoming Events</h3>
        <span className="text-xs text-slate-500">Next 7 days</span>
      </div>
      <div className="space-y-3">
        {events.slice(0, 3).map((event) => (
          <div 
            key={event.id}
            className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors"
          >
            <div className={`w-1 h-12 rounded-full ${typeColors[event.type] || 'bg-slate-400'}`} />
            <div className="flex-1">
              <p className="font-medium text-sm text-slate-800">{event.title}</p>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {format(event.date, 'MMM d')}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {event.attendees}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}