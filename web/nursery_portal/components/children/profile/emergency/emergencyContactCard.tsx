import { Badge } from "@/components/ui/badge";
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";

interface EmergencyContactCardProps {
  priority: number;
  name: string;
  relation: string;
  phone?: string;
  email?: string;
  address?: string;
  authorised: boolean;
  collectionPassword?: string;
  isEmergency?: boolean;
}

export default function EmergencyContactCard({ priority, name, relation, phone, email, address, authorised, collectionPassword, isEmergency }: EmergencyContactCardProps) {
  return (
    <div className={`bg-white rounded-2xl border shadow-sm p-6 ${
      isEmergency ? 'border-amber-200 ring-2 ring-amber-100' : 'border-slate-100'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
            priority === 1 ? 'bg-emerald-500' :
            priority === 2 ? 'bg-blue-500' :
            priority === 3 ? 'bg-amber-500' :
            'bg-slate-400'
          }`}>
            {priority}
          </div>
          <div>
            <p className="text-xs text-slate-500">{relation}</p>
            <p className="font-semibold text-slate-800 text-lg">{name}</p>
          </div>
        </div>
        {authorised && (
          <Badge className="bg-emerald-100 text-emerald-700">
            <CheckCircle className="w-3 h-3 mr-1" /> Authorised
          </Badge>
        )}
      </div>

      <div className="space-y-3">
        {phone && (
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-slate-400" />
            <a href={`tel:${phone}`} className="text-emerald-600 hover:underline font-medium">
              {phone}
            </a>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-slate-400" />
            <a href={`mailto:${email}`} className="text-emerald-600 hover:underline">
              {email}
            </a>
          </div>
        )}
        {address && (
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-4 h-4 text-slate-400 mt-0.5" />
            <span className="text-slate-600">{address}</span>
          </div>
        )}
        {collectionPassword && (
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Collection Password</span>
              <code className="px-3 py-1 bg-slate-100 rounded text-sm font-mono text-slate-800">
                {collectionPassword}
              </code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}