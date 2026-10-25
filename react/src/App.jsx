import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./Pages/Home/Home";
import LandinPage from "./Pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminDashboard from "./components/Admin/AdminDashboard";
import DisplayUsers from "./components/Admin/Manage/ManageUsers/DisplayUsers";
import AdminLayout from "./components/Admin/AdminLayout";
import DisplayProducts from "./components/Admin/Manage/ManageProducts/DisplayProducts";
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
        <Route path="/admin" element={<AdminLayout />}>
          <Route index path="dashboard" element={<AdminDashboard />} />
          <Route path="manage-users" element={<DisplayUsers />} />
          <Route path="manage-products" element={<DisplayProducts />} />
        </Route>

        {/* //every route is a pagfe */}
      </Routes>
    </>
  );
}
export default App;
// component based arch => cba
// role based access = > rba
