import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideProject from "./pages/SideProjects";
import PastWorks from "./pages/PastWorks";
import College from "./pages/College";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/side-projects" element={<SideProject />} />
        <Route path="/past-works" element={<PastWorks />} />
        <Route path="/college" element={<College />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
