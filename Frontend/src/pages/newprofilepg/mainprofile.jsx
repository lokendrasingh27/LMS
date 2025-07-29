import React, { useState, useEffect } from 'react';
import ProfilePage from './components/ProfilePage';
import PhotoPage from './components/PhotoPage';
import AcademicInformationPage from './components/AcademicInformationPage';
import AccountSecurityPage from './components/AccountSecurityPage';
import SubscriptionsPage from './components/SubscriptionsPage';
import PaymentMethodsPage from './components/PaymentMethodsPage';
import PrivacyPage from './components/PrivacyPage';
import NotificationPreferencesPage from './components/NotificationPreferencesPage';
import CloseAccountPage from './components/CloseAccountPage';

// Define the initial profile data structure
const initialProfileData = {
  fullName: 'John Doe',
  firstName: 'John',
  lastName: 'Doe',
  headline: 'Student at Oxford University | Aspiring AI Engineer',
  majorProgram: 'Computer Science', // This might become redundant if 'academicDetails.majorSpecialization' is used consistently
  email: 'john.doe@example.com',
  location: 'Oxford, UK',
  contactInfo: '+123 456 7890',
  bio: "A passionate Computer Science student with a keen interest in Artificial Intelligence and Machine Learning. My goal is to develop innovative solutions and contribute to the tech community. I'm always eager to learn new technologies and collaborate on exciting projects.",
  skills: ['Python', 'Data Analysis', 'Public Speaking', 'React', 'Node.js'],
  interests: ['AI & Machine Learning', 'Graphic Design', 'Economics', 'Reading', 'Hiking'],
  academicDetails: {
    program: 'BSc in CS',
    year: '2023 - 2027',
    gpa: '3.8',
    currentCourse: 'Advanced Data Structures', // Moved here for consistency
    majorSpecialization: 'Artificial Intelligence', // Moved here for consistency
    enrollmentYear: '2023', // Moved here for consistency
    expectedGraduation: '2027', // Moved here for consistency
    gpaPerformanceScore: '3.8/4.0', // Moved here for consistency
  },
  learningGoals: ['Learn TensorFlow', 'Build portfolio', 'Publish blog series', 'Master Cloud Computing'],
  coursesEnrolled: ['Web Development', 'Machine Learning 101', 'Technical Writing', 'Database Systems'],
  certifications: ['Python for Everyone', 'Google Analytics', 'Coursera AI Basics', 'AWS Cloud Practitioner'],
  projectsWorkExperience: [
    'E-commerce website using React',
    'Data analysis on COVID trends with Pandas',
    'Internship at XYZ Tech (Software Engineer Intern)',
    'Developed a mobile app for local businesses',
  ],
  externalLinks: {
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    personalWebsite: 'https://johndoe.com',
  },
  profilePicture: 'https://placehold.co/100x100/002147/ffffff?text=JD',
  accountEmail: 'john.doe@example.com',
  newPassword: '',
  confirmPassword: '',
  multiFactorAuthEnabled: false,
  showProfileToLoggedUsers: true,
  showCoursesOnProfile: true,
  updatesAndOfferings: true,
  productLaunches: true,
  offersAndPromotions: true,
  learningStats: true,
  inspiration: true,
  courseRecommendations: true,
  notificationsFromInstructors: true,
};

// Main App component
export default function App() {
  const [activePage, setActivePage] = useState('Profile');
  const [profileData, setProfileData] = useState(initialProfileData);

  // Handle changes for all form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle nested state for objects (e.g., academicDetails, externalLinks)
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setProfileData(prevData => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    }
    // Handle checkbox inputs
    else if (type === 'checkbox') {
      setProfileData(prevData => ({
        ...prevData,
        [name]: checked,
      }));
    }
    // Handle all other direct inputs
    else {
      setProfileData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Function to save profile data (simulated)
  const handleSave = () => {
    // In a real application, you would send profileData to a backend API
    console.log('Saving profile data:', profileData);
    alert('Profile saved successfully!');
  };

  // Render the currently active page component
  const renderPage = () => {
    switch (activePage) {
      case 'Profile':
        return <ProfilePage profileData={profileData} handleChange={handleChange} handleSave={handleSave} />;
      case 'Photo':
        return <PhotoPage profileData={profileData} handleChange={handleChange} handleSave={handleSave} />;
      case 'Academic Information':
        return <AcademicInformationPage profileData={profileData} handleChange={handleChange} handleSave={handleSave} />;
      case 'Account Security':
        return <AccountSecurityPage profileData={profileData} handleChange={handleChange} handleSave={handleSave} />;
      case 'Subscriptions':
        return <SubscriptionsPage />; // Assuming these pages manage their own state or display static content
      case 'Payment methods':
        return <PaymentMethodsPage />; // Assuming these pages manage their own state or display static content
      case 'Privacy':
        return <PrivacyPage profileData={profileData} handleChange={handleChange} handleSave={handleSave} />;
      case 'Notification Preferences':
        return <NotificationPreferencesPage profileData={profileData} handleChange={handleChange} handleSave={handleSave} />;
      case 'Close account':
        return <CloseAccountPage />;
      default:
        return <ProfilePage profileData={profileData} handleChange={handleChange} handleSave={handleSave} />;
    }
  };

  // Navigation items for the sidebar
  const navItems = [
    'Profile',
    'Photo',
    'Academic Information',
    'Account Security',
    'Subscriptions',
    'Payment methods',
    'Privacy',
    'Notification Preferences',
    'Close account',
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <div className="w-full lg:w-72 bg-[#002147] text-white p-6 flex flex-col rounded-b-xl lg:rounded-r-none lg:rounded-l-xl shadow-lg lg:min-h-screen">
        <div className="flex items-center space-x-4 mb-8">
          <img
            className="h-16 w-16 rounded-full object-cover border-2 border-white"
            src={profileData.profilePicture}
            alt="Profile"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/64x64/002147/ffffff?text=JD'; }}
          />
          <div>
            <h2 className="text-xl font-semibold">{profileData.firstName}</h2>
            <button
              onClick={() => setActivePage('Profile')}
              className="text-sm text-[#A6B1E1] hover:underline"
            >
              View public profile
            </button>
          </div>
        </div>

        <nav className="flex-grow">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActivePage(item)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200
                    ${activePage === item ? 'bg-[#A6B1E1] text-[#002147] font-bold shadow-md' : 'hover:bg-[#1a3a6b] text-white'}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-6 lg:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{activePage} Settings</h1>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}