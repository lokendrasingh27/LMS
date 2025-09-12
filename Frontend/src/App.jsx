import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// General Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import Signup from "./pages/auth/Signup";
import CourseDetails from "./pages/CourseDetail";
import ProfilePage from "./pages/ProfilePage";
import CoursePlayerPage from "./pages/courseplayer/CoursePlayerPage";
import PaymentHistory from "./pages/student/PaymentHistory";
import EnrolledDashboard from "./pages/student/EnrolledDashboard";

// Instructor Pages
import Instructor from "./pages/instructor/Instructor";
import InstructorDashboard from "./pages/instructor/Dashboard";
import Courses from "./pages/instructor/Courses";
import CreateCourse from "./pages/instructor/CreateCourse";
import UpdateCourse from "./pages/instructor/UpdateCourse";
import CreateLecture from "./pages/instructor/CreateLecture";
import EditLecture from "./pages/instructor/EditLecture";
import AssignmentGradingPage from "./pages/instructor/AssignmentGradingPage";

// Admin Layout + Pages (Demo Layout)
import AdminDemoDashboard from "./pages/admin/AdminDemoDashboard"; // Layout
import DashboardHome from "./pages/admin/DashboardHome";
import Instructors from "./pages/admin/Instructors";
import Students from "./pages/admin/Students";
import CoursesPage from "./pages/admin/CoursesPage";
import UserManagement from "./pages/admin/UserManagement";
import CourseAnalytics from "./pages/admin/CourseAnalytics";
import EnrollmentManagement from "./pages/admin/EnrollmentManagement";
import AssessmentResults from "./pages/admin/AssessmentResults";
import Communications from "./pages/admin/Communications";
import FinancialManagement from "./pages/admin/FinancialManagement";

// Fallback
const NotFound = () => <h1 className="text-center text-3xl mt-20">404 - Page Not Found</h1>;

function App() {
  return (
    <Router>
      <Routes>

        {/* 🔹 Public Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/course-player/:courseId" element={<CoursePlayerPage />} />
        <Route path="/CoursePlayerPage" element={<CoursePlayerPage />} /> {/* Optional legacy route */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* 🔹 Student Routes */}
        <Route path="/paymenthistory" element={<PaymentHistory />} />
        <Route path="/courseplayer/EnrolledDashboard" element={<EnrolledDashboard />} />

        {/* 🔹 Instructor Routes (with nested layout) */}
        <Route path="/instructor" element={<Instructor />}>
          <Route path="dashboard" element={<InstructorDashboard />} />
          <Route path="course" element={<Courses />} />
          <Route path="course/create" element={<CreateCourse />} />
          <Route path="course/:courseId" element={<UpdateCourse />} />
          <Route path="course/:courseId/lecture" element={<CreateLecture />} />
          <Route path="course/:courseId/lecture/:lectureId" element={<EditLecture />} />
        </Route>

        {/* 🔹 Admin Panel with Layout (`/admindemo`) */}
        <Route path="/admindemo" element={<AdminDemoDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="students" element={<Students />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="course-analytics" element={<CourseAnalytics />} />
          <Route path="enrollments" element={<EnrollmentManagement />} />
          <Route path="assessments" element={<AssessmentResults />} />
          <Route path="communications" element={<Communications />} />
          <Route path="financials" element={<FinancialManagement />} />
        </Route>

        {/* 🔹 Redirect legacy `/admin` to new layout OR handle separately */}
        <Route path="/admin" element={<Navigate to="/admindemo" replace />} />

        {/* 🔹 404 Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
