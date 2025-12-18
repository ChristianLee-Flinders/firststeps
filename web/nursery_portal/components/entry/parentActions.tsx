import { Parent } from "@/lib/dummyData/parents";
import { Card } from "../ui/card";
import { Baby, LogIn, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { Child, dummyChildren } from "@/lib/dummyData/children";

interface ParentActionsProps {
  parent: Parent;
  onComplete: () => void;
  onBack: () => void;
}

function ParentActions({ parent, onComplete, onBack }: ParentActionsProps) {
    const children = dummyChildren.filter(c => parent.children_ids.includes(c.id));

    const handleChildAction = async ({child, action}: {child: Child, action: string}) => {
        // Simulate API call   
        console.log(`Performing ${action} for ${child.first_name} ${child.last_name}`);
        setTimeout(onComplete, 1500);
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl">
            <Card className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
                <Baby className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">
                Hello, {parent.first_name}!
                </h2>
                <p className="text-slate-600">Select a child to sign in or out</p>
            </div>

            {/* Children List */}
            <div className="space-y-4 mb-6">
                {children.map((child: Child) => (
                <div
                    key={child.id}
                    className="bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-emerald-500 transition-all"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-white text-2xl font-bold">
                            {child.first_name[0]}
                            </div>
                            <div>
                            <h3 className="text-xl font-bold text-slate-800">
                                {child.first_name} {child.last_name}
                            </h3>
                            <p className="text-slate-600">{child.room || 'No room assigned'}</p>
                            </div>
                        </div>
                        <div className="flex ml-5 gap-3">
                            <Button
                            onClick={() => handleChildAction({child, action: 'child_sign_in'})}
                            className="h-14 px-8 text-lg rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                            >
                            <LogIn className="w-5 h-5 mr-2" />
                            Sign In
                            </Button>
                            {/* <Button
                            onClick={() => handleChildAction({child, action: 'child_sign_out'})}
                            variant="outline"
                            className="h-14 px-8 text-lg rounded-xl border-2"
                            >
                            <LogOut className="w-5 h-5 mr-2" />
                            Sign Out
                            </Button> */}
                        </div>
                    </div>
                </div>
                ))}
            </div>

            {children.length === 0 && (
                <p className="text-center text-slate-600 mb-6">No children found for this account.</p>
            )}

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

export default ParentActions

function useQuery(arg0: { queryKey: any[]; queryFn: () => Promise<any>; }): { data?: never[] | undefined; } {
    throw new Error("Function not implemented.");
}
