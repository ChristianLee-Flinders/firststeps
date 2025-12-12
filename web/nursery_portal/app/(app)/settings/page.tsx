import LogoUploader from '@/components/settings/logoUploader';
import OrgAddressForm from '@/components/settings/orgAddress.form';
import OrgInfoForm from '@/components/settings/orgInfo.form';
import SettingsPageTitle from '@/components/settings/pageTitle'
import SettingsSection from '@/components/settings/settingsSection';
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button';
import { dummyOrganisation } from '@/lib/dummyData/organisation'
import { Loader2, Save } from 'lucide-react';

function SettingsPage() {
  const organisation = dummyOrganisation;

  return (

    <>
      <SettingsPageTitle title={"General Settings"} description={"Manage your organisation's basic information"} />

      {/* Subscription Badge */}
      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100">
        <div>
          <p className="text-sm text-slate-600">Current Plan</p>
          <p className="font-semibold text-slate-800 capitalize">{organisation.subscription_plan || 'Trial'}</p>
        </div>
        <Badge className="ml-auto bg-emerald-100 text-emerald-700 capitalize">
          {organisation.subscription_status || 'trial'}
        </Badge>
      </div>

      <SettingsSection title="Organisation Logo" description="Upload your company logo">
        <LogoUploader />
      </SettingsSection>

      <SettingsSection title="Organisation Information" description="Update your organisation's details">
        <OrgInfoForm />
      </SettingsSection>

      <SettingsSection title="Address" description="Your organisation's registered address" >
        <OrgAddressForm/>
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

export default SettingsPage