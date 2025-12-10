import { Shield } from 'lucide-react'

function Safeguarding() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-rose-600" /> Safeguarding Information
        </h3>
        <div className="p-4 bg-slate-50 rounded-xl">
            <p className="text-sm text-slate-600">
                No safeguarding concerns recorded. All required checks and documentation complete.
            </p>
        </div>
    </div>
  )
}

export default Safeguarding