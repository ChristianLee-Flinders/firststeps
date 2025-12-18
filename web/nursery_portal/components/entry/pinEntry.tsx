import { Baby, Delete, User } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { userType } from "@/app/entry/page";

export interface PinEntryProps {
  pin: string;
  error?: string;
  userType: userType | null;
  onDigit: (digit: string) => void;
  onDelete: () => void;
  onBack: () => void;
}

function PinEntry({pin, error, userType, onDigit, onDelete, onBack}: PinEntryProps) {
  const title = userType === 'staff' ? 'Staff Sign In' : 'Parent Sign In';
  const icon = userType === 'staff' ? User : Baby;
  const Icon = icon;

  return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 flex items-center justify-center p-8 ">
            <div className="w-full max-w-2xl">
                <Card className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl max-h-[90vh] overflow-auto">
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
                    <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">{title}</h2>
                    <p className="text-slate-600">Enter your 4-digit PIN</p>
                </div>

                {/* PIN Display */}
                <div className="flex justify-center gap-4 mb-8">
                    {[0, 1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className={`w-20 h-20 rounded-2xl border-4 flex items-center justify-center text-4xl font-bold transition-all ${
                        error
                            ? 'border-rose-500 bg-rose-50 text-rose-600 animate-shake'
                            : pin.length > i
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-600'
                            : 'border-slate-300 bg-white'
                        }`}
                    >
                        {pin.length > i ? '•' : ''}
                    </div>
                    ))}
                </div>

                {/* {error && (
                    <p className="text-center text-rose-600 font-semibold mb-6">{error}</p>
                )} */}

                {/* Keypad */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <Button
                        key={num}
                        onClick={() => onDigit(num.toString())}
                        className="h-full max-h-20 text-3xl font-bold rounded-2xl bg-white hover:bg-emerald-50 text-slate-800 border-2 border-slate-200 hover:border-emerald-500 shadow-lg"
                    >
                        {num}
                    </Button>
                    ))}
                    <Button
                    onClick={onBack}
                    className="h-full max-h-20 text-lg font-semibold rounded-2xl bg-white hover:bg-slate-100 text-slate-600 border-2 border-slate-200"
                    >
                    Cancel
                    </Button>
                    <Button
                    onClick={() => onDigit('0')}
                    className="h-full max-h-20 text-3xl font-bold rounded-2xl bg-white hover:bg-emerald-50 text-slate-800 border-2 border-slate-200 hover:border-emerald-500 shadow-lg"
                    >
                    0
                    </Button>
                    <Button
                    onClick={onDelete}
                    className="h-full max-h-20 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 border-2 border-rose-200"
                    >
                    <Delete className="w-8 h-8" />
                    </Button>
                </div>
                </Card>
            </div>
        </div>
    );
}

export default PinEntry