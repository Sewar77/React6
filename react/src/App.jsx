import LandinPage from "./Pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        {/* general routes */}
        {/* define routes */}

        <Route path="/" element={<LandinPage />} />
        {/* first page  */}
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Home />} />
        <Route path="/login" element={<Home />} />

        {/* admin routes */}

        {/* //every route is a pagfe */}
      </Routes>
    </>
  );
}

export default App;
// component based arch => cba
// role based access = > rba
