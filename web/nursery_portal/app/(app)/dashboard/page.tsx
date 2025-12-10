import AnnouncementWidget from '@/components/dashboard/announcementWidget'
import AttendanceChart from '@/components/dashboard/attendanceChart'
import QuickActions from '@/components/dashboard/quickActions'
import StaffOnDuty from '@/components/dashboard/staffOnDuty'
import UpcomingEvents from '@/components/dashboard/upcomingEvents'
import PageHeader from '@/components/ui/pageHeader.tsx'
import StatCard from '@/components/ui/statCard'
import { format } from 'date-fns'
import { AlertCircle, Baby, Calendar, Users } from 'lucide-react'

/** Dummy data for the dashboard components */
const announcements = [
  {
    id: 'a1',
    type: 'info' as const,
    title: 'New term dates',
    content: 'Term dates for next term have been published. Please check the calendar for details.',
  },
  {
    id: 'a2',
    type: 'celebration' as const,
    title: 'Summer picnic',
    content: 'We are planning a nursery picnic next month. Volunteers welcome — sign up at reception.',
  },
  {
    id: 'a3',
    type: 'urgent' as const,
    title: 'Supply shortage',
    content: 'We are short on nappies — please bring spare if possible until stock arrives.',
  },
]

const staff = [
  { id: 1, first_name: 'Sarah', last_name: 'Johnson', room: 'Butterflies', avatar_url: null, check_in: '07:45' },
  { id: 2, first_name: 'Michael', last_name: 'Chen', room: 'Caterpillars', avatar_url: null, check_in: '08:00' },
  { id: 3, first_name: 'Emma', last_name: 'Williams', room: 'Ladybirds', avatar_url: null, check_in: '07:30' },
  { id: 4, first_name: 'David', last_name: 'Smith', room: 'Bumblebees', avatar_url: null, check_in: '08:15' },
]

function Dashboard() {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Good morning! 👋"
        description={`Here's what's happening at your nursery today, ${format(new Date(), 'EEEE, MMMM d')}`}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard
          title="Children Present"
          value={10}
          icon={Baby}
          color="emerald"
          trend="up"
          trendValue="+3"
        />
        <StatCard
          title="Staff On Duty"
          value={8}
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Absences Today"
          value={2}
          icon={Calendar}
          color="rose"
        />
        <StatCard
          title="Tasks Pending"
          value="5"
          icon={AlertCircle}
          color="amber"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Attendance Chart */}
        <div className="lg:col-span-2">
          <AttendanceChart  />
        </div>

        {/* Right Column - Quick Actions */}
        <div>
          <QuickActions />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnnouncementWidget announcements={announcements} />
        <UpcomingEvents />
        <StaffOnDuty staff={staff} />
      </div>

    </div>
  )
}

export default Dashboard