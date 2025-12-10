import React from 'react'
import { getIconByName } from "@/lib/utils";

export default function OverviewAlerts() {
  // Dummy data for demo purposes
  const dummyAlerts = [
    { type: 'warning', message: 'Registration form overdue', icon: 'FileText' },
    { type: 'info', message: 'Photo consent expires in 7 days', icon: 'Camera' },
    { type: 'urgent', message: 'Speak with parents: dietary change request', icon: 'AlertTriangle' },
  ];

  if (!dummyAlerts || dummyAlerts.length === 0) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {dummyAlerts.map((alert, idx) => {
        const Icon = getIconByName(alert.icon)
        return (
          <div
            key={idx}
            className={`rounded-xl p-4 flex items-start gap-3 ${
              alert.type === 'urgent' ? 'bg-rose-50 border border-rose-200' :
              alert.type === 'warning' ? 'bg-amber-50 border border-amber-200' :
              'bg-blue-50 border border-blue-200'
            }`}
          >
            <Icon className={`w-5 h-5 mt-0.5 ${
              alert.type === 'urgent' ? 'text-rose-600' :
              alert.type === 'warning' ? 'text-amber-600' :
              'text-blue-600'
            }`} />
            <div>
              <p className={`text-sm font-medium ${
                alert.type === 'urgent' ? 'text-rose-800' :
                alert.type === 'warning' ? 'text-amber-800' :
                'text-blue-800'
              }`}>
                {alert.message}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}