'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/dropbox.png';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { ThemeToggler } from './ThemeToggler';

function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow">
      {/* Logo & App Name */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src={logo} alt="logo" height={50} width={50} />
        <h1 className="font-bold text-xl">DropBox</h1>
      </Link>

      {/* Auth Buttons */}
      <div className="flex  space-x-2 items-center">
        <ThemeToggler/>
        <SignedIn>
          {/* Shows only when signed in */}
          <div className="cursor-pointer">
            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          {/* Shows only when signed out */}
          <div className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-blue-400 rounded-lg hover:bg-blue-400/20 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 cursor-pointer">
            <SignInButton mode="modal" />
          </div>
          <div className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md hover:scale-105 hover:shadow-blue-500/40 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95 cursor-pointer">
            <SignUpButton mode="modal" />
          </div>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
