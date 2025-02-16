import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Footer from "./Components/Footer";


// Lazy-loaded components
const Navbar = lazy(() => import("./Components/Navbar"));
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Projects = lazy(() => import("./Pages/Projects"));

// Fallback UI
const Loading = () => <div className="text-center text-xl mt-10">Loading...</div>;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upcomming-projects" element={<Projects />} />
        </Routes>
      
      </Suspense>
   <Footer/>
    </BrowserRouter>
  );
}

export default App;
