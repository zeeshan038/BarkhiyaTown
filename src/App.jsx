import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import WhatsApp from "./Pages/WhatsApp";


// Lazy-loaded components
const Navbar = lazy(() => import("./Components/Navbar"));
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Projects = lazy(() => import("./Pages/Projects"));

// Fallback UI
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <WhatsApp/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upcomming-projects" element={<Projects />} />
        </Routes>
        <Footer/>
      </Suspense>

    </BrowserRouter>
  );
}

export default App;
