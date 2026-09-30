import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./index.css";
import App from "./App.jsx";

// ===== SMOOTH SCROLL SETUP =====
const lenis = new Lenis({
  duration: 1.2,        // <-- SPEED: scroll kitna smooth/slow ho. Bada number = zyada smooth-slow, chota = fast
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // scroll ki easing curve
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);