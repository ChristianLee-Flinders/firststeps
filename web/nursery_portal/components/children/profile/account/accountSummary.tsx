import { getIconByName } from "@/lib/utils";
import { cva } from "class-variance-authority";


function AccountSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard title="Current Balnce" value="£0.00" comment="In credit" icon="PoundSterling" valueColor="emerald" />
        <SummaryCard title="This Month" value="£843.72" comment="December fees" icon="Calculator" />
        <SummaryCard title="Outstanding" value="£12.37" comment="Overdue" icon="CircleAlert" valueColor="red" />
    </div>
  )
}

interface SummaryCardProps {
    title: string;
    value: string;
    comment: string;
    icon: string;

    valueColor?: 'emerald' | 'red' | 'blue' | 'default';
}

function SummaryCard({ title, value, comment, icon, valueColor}: SummaryCardProps) {
    const Icon = getIconByName(icon)
    const valueClasses = cva('text-3xl font-bold', {
        variants: {
            valueColor: {
                emerald: 'text-emerald-600',
                red: 'text-rose-600',
                blue: 'text-blue-600',
                default: 'text-slate-900',
            }
        },
        defaultVariants: {
            valueColor: 'default',
        }
    })
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm text-slate-500">{title}</h3>
                <Icon className="w-5 h-5 text-slate-400" />
            </div>
            <p className={valueClasses({ valueColor })}>{value}</p>
            <p className={`text-xs text-slate-500 mt-1`}>{comment}</p>
        </div>
    )
}

export default AccountSummary