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
// import CertificatePage from "./pages/student/Certificatepage";


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
      
      
      <Route path="/paymenthistory" element={<PaymentHistory />} />
      <Route path="/courses/:courseId" element={<CourseDetails />} />
      <Route path="/course-player/:courseId" element={<CoursePlayerPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    
       
     
     
    </Routes>
  );
}

export default App;
