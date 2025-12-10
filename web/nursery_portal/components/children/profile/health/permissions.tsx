import { CheckCircle, XCircle } from "lucide-react"

export default function Permissions() {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" /> Permissions & Consents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <PermissionItem label="Photo Consent" granted={true} expiry="Dec 2025" />
                <PermissionItem label="Outings & Trips" granted={true} />
                <PermissionItem label="Sun Cream Application" granted={true} />
                <PermissionItem label="Emergency Medical" granted={true} />
                <PermissionItem label="Food Tasting" granted={true} />
                <PermissionItem label="Swimming Activities" granted={false} />
                <PermissionItem label="Social Media" granted={false} />
                <PermissionItem label="Research Participation" granted={false} />
            </div>
        </div>
    )
}

interface PermissionItemProps {
  label: string;
  granted: boolean;
  expiry?: string;
}

function PermissionItem({ label, granted, expiry }: PermissionItemProps) {
  return (
    <div className={`flex items-center justify-between p-3 rounded-xl ${
      granted ? 'bg-emerald-50 border border-emerald-100' : 'bg-slate-50 border border-slate-200'
    }`}>
      <div className="flex items-center gap-2">
        {granted ? (
          <CheckCircle className="w-4 h-4 text-emerald-600" />
        ) : (
          <XCircle className="w-4 h-4 text-slate-400" />
        )}
        <span className={`text-sm font-medium ${granted ? 'text-emerald-800' : 'text-slate-600'}`}>
          {label}
        </span>
      </div>
      {expiry && (
        <span className="text-xs text-slate-500">{expiry}</span>
      )}
    </div>
  );
}