import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { BookOpen } from 'lucide-react'
import Link from 'next/link'
import { createPageUrl } from '@/lib/utils'

const dummyEyfsProgress = {
    'communication_language': 75,
    'physical_development': 82,
    'personal_social_emotional': 68,
    'literacy': 70,
    'mathematics': 78,
    'understanding_world': 85,
    'expressive_arts': 90
  };

interface OverviewLearningProgressProps {
  child: {
    id: string;
  };
}

function OverviewLearningProgress({ child }: OverviewLearningProgressProps) {
    const eyfsProgress = dummyEyfsProgress;

    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-violet-600" /> Learning & Development
            </h3>
            <Link href={createPageUrl(`LearningLog/${child.id}`)}>
            <Button size="sm" variant="outline" className="rounded-xl">
                <BookOpen className="w-4 h-4 mr-2" /> Add Observation
            </Button>
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(eyfsProgress).map(([area, progress]) => (
            <div key={area} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 capitalize">{area.replace(/_/g, ' ')}</span>
                <span className="font-semibold text-slate-800">{progress}%</span>
                </div>
                <Progress value={progress}/>
            </div>
            ))}
        </div>
        <div className="mt-4 p-3 bg-violet-50 rounded-xl border border-violet-100">
            <p className="text-sm font-medium text-violet-800 mb-1">Next Steps</p>
            <p className="text-sm text-violet-700">Continue to encourage independent problem-solving during play activities.</p>
        </div>
        </div>
    )
}

export default OverviewLearningProgress