import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./Pages/Home/Home";
import LandinPage from "./Pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminDashboard from "./components/Admin/AdminDashboard";
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        {/* general routes */}
        {/* define routes */}

        <Route path="/" element={<LandinPage />} />
        {/* first page  */}
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* //every route is a pagfe */}
      </Routes>
    </>
  );
}
export default App;
// component based arch => cba
// role based access = > rba
