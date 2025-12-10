import { Phone, Users } from "lucide-react"

interface OverviewFamilyProps {
  child: {
    parent1_name?: string;
    parent1_phone?: string;
    parent2_name?: string;
    parent2_phone?: string;
  };
}

function OverviewFamily({ child }: OverviewFamilyProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
        <Users className="w-5 h-5 text-blue-600" /> Family Snapshot
        </h3>
        <div className="space-y-4">
        <div>
            <p className="text-xs text-slate-500 mb-1">Primary Contact</p>
            <p className="font-medium text-slate-800">{child.parent1_name || '-'}</p>
            {child.parent1_phone && (
            <a href={`tel:${child.parent1_phone}`} className="text-sm text-emerald-600 hover:underline flex items-center gap-1 mt-1">
                <Phone className="w-3 h-3" /> {child.parent1_phone}
            </a>
            )}
        </div>
        {child.parent2_name && (
            <div>
            <p className="text-xs text-slate-500 mb-1">Secondary Contact</p>
            <p className="font-medium text-slate-800">{child.parent2_name}</p>
            {child.parent2_phone && (
                <a href={`tel:${child.parent2_phone}`} className="text-sm text-emerald-600 hover:underline flex items-center gap-1 mt-1">
                <Phone className="w-3 h-3" /> {child.parent2_phone}
                </a>
            )}
            </div>
        )}
        <div className="pt-3 border-t border-slate-100">
            <p className="text-xs text-slate-500 mb-1">Siblings at Nursery</p>
            <p className="text-sm text-slate-600">Emily Johnson (2 years)</p>
        </div>
        </div>
    </div>
  )
}

export default OverviewFamily