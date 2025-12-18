import { Staff } from "@/lib/dummyData/staff";
import { Card } from "../ui/card";
import { Clock, Coffee, LogIn, LogOut, User } from "lucide-react";
import { Button } from "../ui/button";

interface StaffActionsProps {
  staff: Staff;
  onComplete: () => void;
  onBack: () => void;
}

function StaffActions({ staff, onComplete, onBack }: StaffActionsProps) {

    const handleAction = async (action: string) => {
        console.log(`Performing action: ${action} for staff ID: ${staff.id}`);
        // Show success briefly then return
        setTimeout(onComplete, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 flex items-center justify-center p-8">
            <div className="w-full max-w-3xl">
                <Card className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 mb-4">
                    <User className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">
                    Welcome, {staff.first_name}!
                    </h2>
                    <p className="text-slate-600">Select an action</p>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <button
                    onClick={() => handleAction('clock_in')}
                    className="group bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    >
                    <LogIn className="w-12 h-12 text-white mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-white">Clock In</h3>
                    </button>

                    <button
                    onClick={() => handleAction('clock_out')}
                    className="group bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    >
                    <LogOut className="w-12 h-12 text-white mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-white">Clock Out</h3>
                    </button>

                    <button
                    onClick={() => handleAction('break_start')}
                    className="group bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    >
                    <Coffee className="w-12 h-12 text-white mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-white">Start Break</h3>
                    </button>

                    <button
                    onClick={() => handleAction('break_end')}
                    className="group bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    >
                    <Clock className="w-12 h-12 text-white mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold text-white">End Break</h3>
                    </button>
                </div>

                <Button
                    onClick={onBack}
                    variant="outline"
                    className="w-full h-14 text-lg rounded-xl"
                >
                    Cancel
                </Button>
                </Card>
            </div>
        </div>
  )
}

export default StaffActions