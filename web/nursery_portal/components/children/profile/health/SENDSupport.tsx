import { Star } from 'lucide-react'

function SENDSupport() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-indigo-600" /> SEND Support & Requirements
        </h3>
        <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl">
            <p className="text-sm font-medium text-slate-700 mb-2">Support Plan</p>
            <p className="text-sm text-slate-600">
                No specific SEND requirements identified. Child is developing typically across all areas.
            </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <p className="text-xs text-slate-500 mb-2">External Agencies</p>
                <p className="text-sm text-slate-600">None involved</p>
            </div>
            <div>
                <p className="text-xs text-slate-500 mb-2">SENCO Contact</p>
                <p className="text-sm text-slate-600">Mrs. Linda Patterson</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SENDSupport