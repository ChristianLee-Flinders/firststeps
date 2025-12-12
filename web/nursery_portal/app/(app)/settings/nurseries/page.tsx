import SettingsPageTitle from "@/components/settings/pageTitle"
import SettingsSection from "@/components/settings/settingsSection"
import { Button } from "@/components/ui/button"
import StatusBadge from "@/components/ui/statusBadge"
import { dummyNurseries } from "@/lib/dummyData/nurseries"
import { createPageUrl } from "@/lib/utils"
import { Clock, Edit, MapPin, Plus, Users } from "lucide-react"
import Link from "next/link"

function Page() {
    const nurseries = dummyNurseries;

    return (
        <>
            <SettingsPageTitle title={"Nursery Locations"} description={"Manage your nursery sites and their settings"} />

            <SettingsSection
            title="Nurseries"
            description="All registered nursery locations"
            actions={
                <Link href={createPageUrl('NurseryForm')}>
                <Button size="sm" className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Nursery
                </Button>
                </Link>
            }>
                {nurseries.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">
                    No nurseries configured yet
                    </div>
                ) : (
                    <div className="space-y-3">
                        {nurseries.map(nursery => (
                            <div key={nursery.id} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                                        {nursery.name?.[0] || 'N'}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-slate-800">{nursery.name}</h3>
                                        <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                                            {nursery.city && (
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3 h-3" /> {nursery.city}
                                            </span>
                                            )}
                                            {nursery.capacity && (
                                            <span className="flex items-center gap-1">
                                                <Users className="w-3 h-3" /> {nursery.capacity} capacity
                                            </span>
                                            )}
                                            {nursery.opening_time && nursery.closing_time && (
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> {nursery.opening_time} - {nursery.closing_time}
                                            </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <StatusBadge status={nursery.status || 'active'} />
                                    <Link href={createPageUrl(`NurseryForm?id=${nursery.id}`)}>
                                    <Button variant="ghost" size="icon" className="rounded-xl">
                                        <Edit className="w-4 h-4 text-slate-400" />
                                    </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </SettingsSection>
        </>
    )
}

export default Page