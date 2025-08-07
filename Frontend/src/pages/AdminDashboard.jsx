import React from 'react';


// Background main: #00173D (dark navy)

// Sidebar background: #0A5F6F (teal)

// Text primary: #E8F1F2 (off-white)

// Accent/highlight: #C2E8F8 (light blue)

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#E8F1F2] text-[#00173D] overflow-hidden p-0 m-0 w-full h-full">
      {/* Sidebar */}
      <div className="w-64 bg-[#00173D] p-6 shadow-lg flex-shrink-0 h-screen overflow-y-auto">
        <div className="text-2xl font-bold mb-10 text-[#C2E8F8]"> Admin </div>
        <ul className="space-y-4">
          <SidebarItem label="Dashboard" />
          <SidebarItem label="Courses" />
          <SidebarItem label="Students" />
          <SidebarItem label="Notifications" />
          <SidebarItem label="Settings" />
        </ul>
      </div>


      {/* Main Content */}
      <div className="flex-1 p-8 bg-[#E8F1F2 ] rounded-l-lg overflow-y-auto h-screen">
        <h1 className="text-3xl font-bold mb-8 text-[#00173D ]">Admin Dashboard</h1>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardMetricCard title="Total Students" value="1,245" />
          <DashboardMetricCard title="Active Courses" value="56" />
          <DashboardMetricCard title="Revenue" value="$45,000" />
          <DashboardMetricCard title="Pending Approvals" value="12" />
        </div>

        {/* Recent Activity */}
        <div className="bg-[#0A5F6F] p-6 rounded-lg mb-8 border border-[#C2E8F8]">
          <h2 className="text-xl font-semibold mb-4 text-[#C2E8F8]">Recent Activity Feed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ActivityCard
              title="Course Approval Requests"
              items={[
                'New course: React Fundamentals',
                'New course: Advanced CSS',
                'New course: UX/UI Design',
                'New course: Database Management',
                'New course: Machine Learning Basics',
              ]}
            />
            <ActivityCard
              title="New Enrollments"
              items={[
                'John Doe enrolled in Python',
                'Jane Smith enrolled in Data Science',
                'Peter Jones enrolled in Web Development',
                'Sarah Lee enrolled in Graphic Design',
                'Michael Chen enrolled in Cloud Computing',
              ]}
            />
          </div>
        </div>



        {/* Additional Content for scrollbar */}
        <div className="mt-8 p-6 bg-[#0A5F6F] rounded-lg border border-[#C2E8F8]">
          <h2 className="text-xl font-semibold mb-4 text-[#C2E8F8]">More Content to Demonstrate Scroll</h2>
          <p className="text-[#C2E8F8]">
            This section is here to make the main content panel tall enough to trigger a scrollbar.
            In a real application, you would have more dashboard widgets, tables, and data visualizations here.
          </p>
          <div className="h-64 mt-4 bg-[#C2E8F8] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ label }) => (
  <li className="p-3 rounded-lg hover:bg-[#C2E8F8] transition-colors duration-200 cursor-pointer text-[#E8F1F2] font-medium">
    {label}
  </li>
);

const DashboardMetricCard = ({ title, value }) => (
  <div className="bg-[#C2E8F8] p-6 rounded-lg shadow-md text-[#00173D]">
    <h3 className="text-sm font-medium">{title}</h3>
    <p className="text-4xl font-bold mt-2">{value}</p>
  </div>
);

const ActivityCard = ({ title, items }) => (
  <div className="bg-[#0A5F6F] p-4 rounded-lg text-[#E8F1F2]">
    <h4 className="text-lg font-medium mb-2 text-[#C2E8F8]">{title}</h4>
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index} className="text-sm">{item}</li>
      ))}
    </ul>
  </div>
);

const ChartPlaceholder = ({ title }) => (
  <div className="bg-[#C2E8F8] p-6 rounded-lg text-center h-48 flex items-center justify-center text-[#00173D] font-medium">
    {title} Chart Placeholder
  </div>
);

export default Dashboard;
