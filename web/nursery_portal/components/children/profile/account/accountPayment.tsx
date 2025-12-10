import { Banknote } from "lucide-react"

function AccountPayment() {
    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Banknote className="w-5 h-5 text-emerald-600" /> Payment History
            </h3>
            <div className="space-y-2">
                {[
                { date: 'Dec 1, 2024', amount: 845.00, method: 'Direct Debit', ref: 'DD-2024-12-01' },
                { date: 'Nov 1, 2024', amount: 845.00, method: 'Direct Debit', ref: 'DD-2024-11-01' },
                { date: 'Oct 1, 2024', amount: 780.00, method: 'Direct Debit', ref: 'DD-2024-10-01' },
                ].map((payment, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
                    <div>
                    <p className="font-medium text-slate-800">{payment.date}</p>
                    <p className="text-sm text-slate-500">{payment.method} • {payment.ref}</p>
                    </div>
                    <p className="font-bold text-emerald-600">£{payment.amount.toFixed(2)}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default AccountPayment