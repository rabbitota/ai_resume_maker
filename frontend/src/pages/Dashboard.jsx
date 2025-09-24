import React, { useState } from 'react';

// Mock data
const userData = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  joinDate: 'January 2023',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
};

const stats = [
  { label: 'Projects', value: 24, change: '+12%', changeType: 'positive' },
  { label: 'Tasks Completed', value: 189, change: '+8%', changeType: 'positive' },
  { label: 'Team Members', value: 15, change: '+2', changeType: 'neutral' },
  { label: 'Productivity', value: '92%', change: '-3%', changeType: 'negative' }
];

const recentActivities = [
  { id: 1, action: 'Completed project design', project: 'Website Redesign', time: '2 hours ago' },
  { id: 2, action: 'Added new team member', project: 'Mobile App', time: '5 hours ago' },
  { id: 3, action: 'Submitted report', project: 'Q3 Analytics', time: '1 day ago' },
  { id: 4, action: 'Started new project', project: 'E-commerce Platform', time: '2 days ago' }
];

const quickActions = [
  { icon: '📊', label: 'Analytics', description: 'View project analytics' },
  { icon: '👥', label: 'Team', description: 'Manage team members' },
  { icon: '📝', label: 'Tasks', description: 'Create new task' },
  { icon: '⚙️', label: 'Settings', description: 'Account settings' }
];

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-blue-600">
          <h1 className="text-xl font-bold text-white">Dashboard</h1>
        </div>
        <nav className="mt-8">
          {['Overview', 'Projects', 'Tasks', 'Team', 'Analytics', 'Settings'].map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={userData.avatar}
                  alt={userData.name}
                />
                <span className="text-sm font-medium text-gray-700">{userData.name}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="p-6">
          {/* Welcome section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, {userData.name}!</h1>
            <p className="text-gray-600">Here's what's happening with your projects today.</p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    stat.changeType === 'positive' ? 'bg-green-100 text-green-800' :
                    stat.changeType === 'negative' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick actions */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center p-3 text-left rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-2xl mr-3">{action.icon}</span>
                      <div>
                        <p className="font-medium text-gray-900">{action.label}</p>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent activity */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View all</button>
                </div>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div>
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.project}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default UserDashboard;