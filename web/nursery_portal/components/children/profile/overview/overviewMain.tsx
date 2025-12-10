import OverviewAlerts from "./overviewAlerts"
import OverviewBookingPattern from "./overviewBookingPattern";
import OverviewFamily from "./overviewFamily";
import OverviewFileNotes from "./overviewFileNotes";
import OverviewLearningProgress from "./overviewLearningProgress";
import OverviewProfile from "./overviewProfile"
import OverviewQuickStats from "./overviewQuickStats";


interface OverviewMainProps {
  child: {
    id: string;
    date_of_birth: string;
    gender?: string;
    enrollment_date?: string;
    room: string;
    status: string;
    parent1_name?: string;
    parent1_phone?: string;
    parent2_name?: string;
    parent2_phone?: string;
    funding_type?: string;
  };  
}

function OverviewMain({ child }: OverviewMainProps) {
  return (
    <>
      <OverviewAlerts />

      {/* Main Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <OverviewProfile child={child} />
        <OverviewFamily child={child} />
        <OverviewQuickStats child={child} />
      </div>

      <OverviewLearningProgress child={child} />
      <OverviewBookingPattern />
      <OverviewFileNotes />
    </>
  )
}

export default OverviewMain