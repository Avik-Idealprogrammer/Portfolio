import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ color: "#F5F0EB" }}>
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
      <p className="text-gray-400 mb-8">This page doesn't exist.</p>
      <Link to="/" className="text-sm tracking-widest uppercase hover:text-orange-500 transition-colors">
        ← Back home
      </Link>
    </div>
  );
}