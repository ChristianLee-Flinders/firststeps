import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CookingPot, Heart, Phone, Shield } from 'lucide-react'

const dummyAlergies = 'Peanuts, Tree Nuts'
const dummyMedicalConditions = 'Mild asthma'
const dummyDoctorName = 'Dr. Emily Carter'
const dummyDoctorPhone = '555-123-4567'
const dummyDietaryRequirements = 'Vegetarian'


function HealthInformation() {
    const allergies = dummyAlergies;
    const medical_conditions = dummyMedicalConditions;
    const doctor_name = dummyDoctorName;
    const doctor_phone = dummyDoctorPhone;
    const dietary_requirements = dummyDietaryRequirements;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" /> Allergies & Intolerances
              </h3>
              {allergies ? (
                <div className="space-y-3">
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                    <p className="font-medium text-amber-900 text-sm mb-1">⚠️ Severe Nut Allergy</p>
                    <p className="text-sm text-amber-700">{allergies}</p>
                  </div>
                  <p className="text-xs text-slate-500">Action Plan: EpiPen available in medical cabinet. Staff trained.</p>
                </div>
              ) : (
                <p className="text-slate-500">No known allergies recorded</p>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-600" /> Medical Conditions
              </h3>
              <p className="text-slate-600 mb-4">{medical_conditions || 'No medical conditions recorded'}</p>
              
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <p className="text-xs font-medium text-slate-500 uppercase">GP Details</p>
                <p className="font-medium text-slate-800">{doctor_name || 'Not provided'}</p>
                {doctor_phone && (
                  <a href={`tel:${doctor_phone}`} className="text-sm text-emerald-600 hover:underline flex items-center gap-1">
                    <Phone className="w-3 h-3" /> {doctor_phone}
                  </a>
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <CookingPot className="w-5 h-5 text-orange-600" /> Dietary Requirements
              </h3>
              <p className="text-slate-600">{dietary_requirements || 'No dietary requirements specified'}</p>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-xs font-medium text-blue-800 mb-1">Meal Preferences</p>
                <p className="text-sm text-blue-700">Vegetarian meals preferred. Loves pasta and rice dishes.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-violet-600" /> Immunisations
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">MMR</span>
                  <Badge className="bg-emerald-100 text-emerald-700 text-xs">Up to date</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">DTaP/IPV/Hib</span>
                  <Badge className="bg-emerald-100 text-emerald-700 text-xs">Up to date</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Flu (Annual)</span>
                  <Badge className="bg-amber-100 text-amber-700 text-xs">Due Dec 2024</Badge>
                </div>
              </div>
            </div>
        </div>
    )
}

export default HealthInformation