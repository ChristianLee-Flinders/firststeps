'use client'
import SettingsPageTitle from '@/components/settings/pageTitle'
import SettingsSection from '@/components/settings/settingsSection'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Plus, Save } from 'lucide-react';
import { useState } from 'react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

type Day = typeof DAYS[number];

interface HoursState {
  [key: string]: {
    open: string
    close: string
    enabled: boolean
  }
}

function Page() {

  const [hours, setHours] = useState<HoursState>({
    Monday: { open: '07:30', close: '18:00', enabled: true },
    Tuesday: { open: '07:30', close: '18:00', enabled: true },
    Wednesday: { open: '07:30', close: '18:00', enabled: true },
    Thursday: { open: '07:30', close: '18:00', enabled: true },
    Friday: { open: '07:30', close: '18:00', enabled: true },
    Saturday: { open: '', close: '', enabled: false },
    Sunday: { open: '', close: '', enabled: false },
  });

  const updateHours = ({ day, field, value }: { day: Day; field: 'open' | 'close' | 'enabled'; value: string | boolean }) => {
    setHours(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value }
    }));
  };


  return (
    <>
      <SettingsPageTitle title='Operating Hours' description='Set your nursery opening times and closure dates' />

      <SettingsSection title="Weekly Hours" description="Set opening and closing times for each day">
        <div className="space-y-3">
          {DAYS.map(day => (
            <div
              key={day}
              className={`flex items-center gap-4 p-4 rounded-xl ${
                hours[day].enabled ? 'bg-slate-50' : 'bg-slate-100 opacity-60'
              }`}
            >
              <div className="w-28">
                <p className="font-medium text-slate-800">{day}</p>
              </div>
              <Switch
                checked={hours[day].enabled}
                onCheckedChange={(v) => updateHours({ day, field: 'enabled', value: v })}
              />
              {hours[day].enabled && (
                <>
                  <div className="flex items-center gap-2">
                    <Label className="text-xs text-slate-500">Open</Label>
                    <Input
                      type="time"
                      value={hours[day].open}
                      onChange={(e) => updateHours({ day, field: 'open', value: e.target.value })}
                      className="rounded-xl w-32"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Label className="text-xs text-slate-500">Close</Label>
                    <Input
                      type="time"
                      value={hours[day].close}
                      onChange={(e) => updateHours({ day, field: 'close', value: e.target.value })}
                      className="rounded-xl w-32"
                    />
                  </div>
                </>
              )}
              {!hours[day].enabled && (
                <span className="text-sm text-slate-500">Closed</span>
              )}
            </div>
          ))}
        </div>
      </SettingsSection>

      <SettingsSection title="Holiday Closures" description="Set dates when the nursery is closed">
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 text-center">
              <p className="text-slate-500">No holiday closures configured</p>
              <Button variant="outline" size="sm" className="mt-3 rounded-xl">
                <Plus className="w-4 h-4 mr-2" />
                Add Closure
              </Button>
            </div>
          </div>
        </SettingsSection>

        <div className="flex justify-end">
        <Button 
          className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </>
  )
}

export default Page