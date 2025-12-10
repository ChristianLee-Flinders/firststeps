'use client'
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import { childProfileNavItems } from "@/lib/navigation";
import { getIconByName } from "@/lib/utils";
import { TabsList } from "@radix-ui/react-tabs";
import { useState } from "react";
import OverviewMain from "./overview/overviewMain";
import EmergencyMain from "./emergency/emergencyMain";
import HealthMain from "./health/healthMain";
import AccountMain from "./account/accountMain";


interface ChildTabNavigationProps {
  child: {
    date_of_birth: string;
    gender?: string;
    enrollment_date?: string;
    room: string;
    status: string;
    id: string;
    first_name: string;
    last_name: string;
    parent1_name?: string;
  }; 
}
    
function ChildTabNavigation({ child }: ChildTabNavigationProps) {

    const [activeTab, setActiveTab] = useState('overview');
    const tabItems = childProfileNavItems;

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-2">
                <TabsList  className="grid w-full grid-cols-4 gap-2 bg-transparent p-0">
                    {tabItems.map((tab) => {
                        const Icon = getIconByName(tab.icon)
                        return (
                            <TabsTrigger value={tab.tabValue} key={tab.tabValue}
                                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all py-3">
                                <Icon className="w-4 h-4 mr-2" />
                                <span className="hidden sm:inline">{tab.name}</span>
                            </TabsTrigger>
                        )
                    })}
                </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-6">
                <OverviewMain child={child} />
            </TabsContent>
            <TabsContent value="contacts" className="space-y-6">
                <EmergencyMain childId={child.id} />
            </TabsContent>
            <TabsContent value="health" className="space-y-6">
                <HealthMain />
            </TabsContent>
            <TabsContent value="account" className="space-y-6">
                <AccountMain child={child} />
            </TabsContent>
        </Tabs>
    )

}

export default ChildTabNavigation