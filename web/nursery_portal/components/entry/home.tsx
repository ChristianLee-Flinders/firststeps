import { Baby, QrCode, User, Users } from "lucide-react"
import StaffQrCode from "./staffQrCode"
import Logo from "../ui/logo"

function EntryHome({onSelect}: {onSelect: (type: 'staff' | 'parent' | 'visitor') => void}) {
  return (
        <div className="w-full max-w-6xl">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-6xl font-bold text-white mb-4">{'Welcome to Alphabet House' }</h1>
                <p className="text-2xl text-white/90">Please select sign-in type</p>
            </div>

            {/* Main Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <button
                onClick={() => onSelect('staff')}
                className="group bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <User className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-2">Staff</h3>
                        <p className="text-slate-600 text-lg">Clock in/out & breaks</p>
                    </div>
                </button>

                <button
                onClick={() => onSelect('parent')}
                className="group bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Baby className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-2">Parent</h3>
                        <p className="text-slate-600 text-lg">Sign children in/out</p>
                    </div>
                </button>

                <button
                onClick={() => onSelect('visitor')}
                className="group bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                >
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-2">Visitor</h3>
                    <p className="text-slate-600 text-lg">Sign in as guest</p>
                </div>
                </button>
            </div>

            {/* QR Code Section */}
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-center gap-8">
                    <div className="flex items-center gap-4">
                        <QrCode className="w-8 h-8 text-slate-600" />
                        <div>
                        <h4 className="text-lg font-semibold text-slate-800">Scan QR Code</h4>
                        <p className="text-sm text-slate-600">Staff can scan from their mobile app</p>
                        </div>
                    </div>
                    <StaffQrCode />
                </div>
            </div>
            <div className="mt-3 text-center text-white flex items-center justify-center gap-2">
                <span>Supporting your nursery with</span>
                <Logo size="sm" />
            </div>
        </div>
    )
}

export default EntryHome