import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import Signup from "./pages/auth/Signup";
import InstructorDashboard from "./pages/instructor/Dashboard";
import CoursePlayerPage from "./pages/courseplayer/CoursePlayerPage";
import ProfilePage from "./pages/ProfilePage";
import Instructor from "./pages/instructor/Instructor";
import Courses from "./pages/instructor/Courses";
import CreateCourse from "./pages/instructor/CreateCourse";
import UpdateCourse from "./pages/instructor/UpdateCourse";
import CreateLecture from "./pages/instructor/CreateLecture";
import CourseDetails from "./pages/CourseDetail";
import EnrolledDashboard from "./pages/student/EnrolledDashboard";
import EditLecture from "./pages/instructor/EditLecture";
import PaymentHistory from "./pages/student/PaymentHistory";
import AssignmentGradingPage from "./pages/instructor/AssignmentGradingPage";

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


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/EnrolledDashboard" element={<EnrolledDashboard />} />

      <Route path="/instructor" element={<Instructor />}>
        <Route path="dashboard" element={<InstructorDashboard />} />
        <Route path="course" element={<Courses />} />
        <Route path="course/create" element={<CreateCourse />} />
        <Route path="course/:courseId" element={<UpdateCourse />} />
        <Route path="course/:courseId/lecture" element={<CreateLecture />} />
        <Route path="course/:courseId/lecture/:lectureId" element={<EditLecture />} />
      </Route>
      
      <Route path="/CoursePlayerPage" element={<CoursePlayerPage />} />
      <Route path="/paymenthistory" element={<PaymentHistory />} />
      <Route path="/courses/:courseId" element={<CourseDetails />} />
      <Route path="/course-player/:courseId" element={<CoursePlayerPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      

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


    </Routes>
  );
}

export default App;
