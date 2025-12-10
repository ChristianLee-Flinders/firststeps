import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { createPageUrl } from '@/lib/utils'
import { Receipt } from 'lucide-react'
import Link from 'next/link'

interface AccountInvoicesProps {
    child: {
        id: string;
    };
}

function AccountInvoices({ child }: AccountInvoicesProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Receipt className="w-5 h-5 text-violet-600" /> Recent Invoices
        </h3>
        <div className="space-y-2">
            {[
            { number: 'INV-1234', date: 'Dec 1, 2024', amount: 845.00, status: 'paid' },
            { number: 'INV-1189', date: 'Nov 1, 2024', amount: 845.00, status: 'paid' },
            { number: 'INV-1145', date: 'Oct 1, 2024', amount: 780.00, status: 'paid' },
            ].map((invoice, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-violet-100">
                    <Receipt className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                    <p className="font-medium text-slate-800">{invoice.number}</p>
                    <p className="text-sm text-slate-500">{invoice.date}</p>
                </div>
                </div>
                <div className="flex items-center gap-3">
                <p className="font-bold text-slate-800">£{invoice.amount.toFixed(2)}</p>
                <Badge className="bg-emerald-100 text-emerald-700 capitalize">{invoice.status}</Badge>
                </div>
            </div>
            ))}
        </div>
        <Link href={createPageUrl(`Invoices/${child.id}`)} >
            <Button variant="outline" className="w-full mt-4 rounded-xl">
                View All Invoices
            </Button>
        </Link>
    </div>
  )
}

export default AccountInvoices