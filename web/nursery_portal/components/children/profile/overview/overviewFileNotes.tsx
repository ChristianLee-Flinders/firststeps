import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { FileText } from 'lucide-react'

const dummyNotes = [
    { text: 'Loves painting activities, especially with bright colours', author: 'Sarah Thompson', role: 'Key Person', timestamp: '2 days ago' },
    { text: 'Settling in well with the group. Making friends with Emily and Jack.', author: 'Mark Davis', role: 'Room Leader', timestamp: '1 week ago' },
    { text: 'Mum mentioned he has a new baby brother at home. May need extra attention.', author: 'Sarah Thompson', role: 'Key Person', timestamp: '2 weeks ago' },
];


function OverviewFileNotes() {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-slate-600" /> File Notes
            </h3>
            <div className="space-y-3">
                {dummyNotes.map((note, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-slate-700 mb-3">{note.text}</p>
                    <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">
                            {note.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-slate-700">{note.author}</span>
                        <Badge variant="outline" className="text-xs">{note.role}</Badge>
                    </div>
                    <span className="text-slate-400">{note.timestamp}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default OverviewFileNotes