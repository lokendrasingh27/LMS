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
import CertificatePage from "./pages/student/Certificatepage";
import Dashboard from './pages/admin/Dashboard';
import Instructors from './pages/admin/Instructors'; 
import Students from './pages/admin/Students';
import CoursesPage from './pages/admin/CoursesPage';
import UserManagement from './pages/admin/UserManagement';
import CourseAnalytics from "./pages/admin/CourseAnalytics";
import EnrollmentManagement from "./pages/admin/EnrollmentManagement";
import AssessmentResults from "./pages/admin/AssessmentResults";
import Communications from './pages/admin/Communications';
import FinancialManagement from './pages/admin/FinancialManagement';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/courseplayer/EnrolledDashboard" element={<EnrolledDashboard />} />
      
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
      <Route path="/certificate" element={<CertificatePage />} />

      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/instructors" element={<Instructors />} />
      <Route path="/admin/students" element={<Students />} />
       <Route path="/admin/courses" element={<CoursesPage />} />
       <Route path="/admin/users" element={<UserManagement />} />
       <Route path="/admin/course-analytics" element={<CourseAnalytics />} />
        <Route path="/admin/enrollments" element={<EnrollmentManagement />} />
         <Route path="/admin/assessments" element={<AssessmentResults />} />
         <Route path="/admin/communications" element={<Communications />} />
        <Route path="/admin/financials" element={<FinancialManagement />} />
        <Route path="/admin/assessments" element={<AssessmentResults />} />
<Route path="/admin/course-analytics" element={<CourseAnalytics />} />
    </Routes>
  );
}

export default App;
