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
          <div className="cursor-pointer">
            <SignInButton mode="modal" />
          </div>
          <div className="cursor-pointer">
            <SignUpButton mode="modal" />
          </div>
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
