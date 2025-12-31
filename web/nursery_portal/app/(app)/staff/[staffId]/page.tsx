import ChildProfileHeader from "@/components/children/profile/childProfileHeader"
import ChildTabNavigation from "@/components/children/profile/childTabNavigation"
import StaffProfileHeader from "@/components/staff/profile/staffProfileHeader"
import { Button } from "@/components/ui/button"
import { dummyChildren } from "@/lib/dummyData/children"
import { dummyStaff } from "@/lib/dummyData/staff"
import { createPageUrl } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

type Props = { params: Promise<{ staffId: string }> }
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export default async function Page({ params }: Props) {
  
  const { staffId } = await params
  const staffMember = dummyStaff.find((c) => c.id === staffId)

  if (!staffMember) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">Staff member not found</p>
        <Link href={createPageUrl('Staff')}>
          <Button variant="link">Back to Staff</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">

        {/* Back button */}
        <Link href={createPageUrl('Staff')}>
            <Button variant="ghost" className="rounded-xl gap-2 text-slate-600 hover:text-slate-800">
            <ArrowLeft className="w-4 h-4" /> Back to Staff
            </Button>
        </Link>

        <StaffProfileHeader staff={staffMember} />

    

    </div>
  )
}