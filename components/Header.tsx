'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/Dropify.png';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { ThemeToggler } from './ThemeToggler';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Dropify Logo" width={40} height={40} />
          <span className="text-xl md:text-2xl font-semibold tracking-tight">
            Dropify
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-muted-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <ThemeToggler />

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>Get Started</Button>
            </SignUpButton>
          </SignedOut>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-3 animate-fade-in">
          <ThemeToggler />

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" className="w-full justify-start">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="w-full justify-start">Get Started</Button>
            </SignUpButton>
          </SignedOut>
        </div>
      )}
    </header>
  );
}

export default Header;
