import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white py-12 px-6 md:px-20 mt-10 overflow-hidden">
      {/* Glowing border top */}
      <div className="absolute top-0 left-1/2 w-[120%] h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-pulse blur-sm -translate-x-1/2" />

      <div className="flex flex-col items-center space-y-6">
        {/* Signature text */}
        <p className="text-sm text-gray-400 text-center">
          🚀 Built with <span className="text-pink-400">React</span>, crafted with ☕ & ❤️ by{" "}
          <span className="text-white font-semibold underline underline-offset-4 decoration-blue-500">
            Sidharth Sangelia
          </span>
        </p>

        {/* Tech stack badges */}
        <div className="flex space-x-4">
          <span className="text-xs bg-blue-700/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30 backdrop-blur-sm">
            Next.js
          </span>
          <span className="text-xs bg-purple-700/20 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30 backdrop-blur-sm">
            TailwindCSS
          </span>
          <span className="text-xs bg-slate-700/20 text-slate-300 px-3 py-1 rounded-full border border-slate-500/30 backdrop-blur-sm">
            Deployed with Vercel
          </span>
        </div>

        {/* Social links */}
        <div className="flex space-x-6 mt-2">
          <Link
            href="https://github.com/sidharthsangelia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition hover:scale-110"
          >
            <Github size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sidharthsangelia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition hover:scale-110"
          >
            <Linkedin size={22} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
