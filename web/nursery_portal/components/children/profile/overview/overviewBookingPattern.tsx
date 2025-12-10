import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react"

const dummyBookingPattern = [
    { day: 'Monday', sessions: ['Full Day'], time: '7:30 - 18:00' },
    { day: 'Tuesday', sessions: ['Full Day'], time: '7:30 - 18:00' },
    { day: 'Wednesday', sessions: ['Full Day'], time: '7:30 - 18:00' },
    { day: 'Thursday', sessions: ['Half Day AM'], time: '7:30 - 12:30' },
    { day: 'Friday', sessions: [], time: 'Not booked' },
];

function OverviewBookingPattern() {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" /> Weekly Booking Pattern
            </h3>
            <div className="space-y-2">
                {dummyBookingPattern.map((day, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                    <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-medium text-slate-800 w-24">{day.day}</span>
                    {day.sessions.length > 0 ? (
                        <div className="flex gap-2">
                        {day.sessions.map((session, i) => (
                            <Badge key={i} className="bg-emerald-100 text-emerald-700 text-xs">
                            {session}
                            </Badge>
                        ))}
                        </div>
                    ) : (
                        <span className="text-slate-400 text-sm">Not booked</span>
                    )}
                    </div>
                    <span className="text-sm text-slate-500">{day.time}</span>
                </div>
                ))}
            </div>
        </div>
    )
}

export default OverviewBookingPattern