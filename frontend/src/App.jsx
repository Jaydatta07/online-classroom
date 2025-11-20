import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Profile from "./components/dashboard/DashboardHome";
import DashboardLayout from "./pages/DashboardLayout";
import VideoStream from "./components/video/VideoStream";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* other routes like login, register, dashboard can be added later */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        {/* Video Streaming Page */}
        <Route path="/dashboard" element={<DashboardLayout />} >
          <Route index element={<Profile />} />
          <Route path="home" element={<Profile />} />
          <Route path="stream" element={<VideoStream />} />
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
