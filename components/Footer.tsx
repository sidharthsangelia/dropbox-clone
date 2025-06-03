'use client';

import { Github, Linkedin, X } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background text-foreground py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 text-sm">

        {/* Brand Section */}
        <div className="max-w-sm space-y-2">
          <p className="text-base font-semibold text-foreground">Dropify</p>
          <p className="text-muted-foreground">
            Your digital sanctuary to store, manage, and share your files—securely and effortlessly.
          </p>
          <p className="text-xs mt-4 text-muted-foreground">
            © {new Date().getFullYear()} Sidharth Sangelia. All rights reserved.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Tech Stack</p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>ShadCN UI</li>
            <li>Deployed on Vercel</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Connect</p>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/sidharthsangelia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent-foreground transition hover:scale-110"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sidharthsangelia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent-foreground transition hover:scale-110"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://x.com/Sidharth_1503"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="hover:text-accent-foreground transition hover:scale-110"
            >
              <X size={20} />
            </Link>
          </div>
        </div>

      </div>

      {/* Developer Signature */}
      <div className="mt-8 text-center text-xs text-muted-foreground">
        Built with ☕ & ❤️ by{' '}
        <span className="font-medium underline underline-offset-4 decoration-accent">
          Sidharth Sangelia
        </span>
      </div>
    </footer>
  );
}
