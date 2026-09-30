import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectDetail from "./pages/ProjectDetail";

function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}