import ChildProfileHeader from "@/components/children/profile/childProfileHeader"
import ChildTabNavigation from "@/components/children/profile/childTabNavigation"
import { Button } from "@/components/ui/button"
import { dummyChildren } from "@/lib/dummyData/children"
import { createPageUrl } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

type Props = { params: Promise<{ childId: string }> }
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export default async function Page({ params }: Props) {
  
  const { childId } = await params
  const child = dummyChildren.find((c) => c.id === childId)

  if (!child) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">Child not found</p>
        <Link href={createPageUrl('Children')}>
          <Button variant="link">Back to Children</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Back button */}
      <Link href={createPageUrl('Children')}>
        <Button variant="ghost" className="rounded-xl gap-2 text-slate-600 hover:text-slate-800">
          <ArrowLeft className="w-4 h-4" /> Back to Children
        </Button>
      </Link>

      <ChildProfileHeader child={child} />
      <ChildTabNavigation child={child}/>

    </div>
  )
}