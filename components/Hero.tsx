import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ShinyButton } from "./magicui/shiny-button";

function Hero() {
  return (
    <main>
      <div className="relative mx-auto  flex max-w-7xl flex-col items-center justify-center">
        <div
  aria-hidden="true"
  className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
>
  <div
    style={{
      clipPath:
        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      background: 'linear-gradient(to top right, var(--primary), var(--accent))',
      opacity: '0.3', // Increased opacity to 30% for more visibility
    }}
    className="mx-auto aspect-1155/678 w-288.75"
  />
</div>
        <div className="px-4 py-8 md:py-10">
          <span className="mx-auto flex justify-center mb-6">
            <ShinyButton className="rounded-xl">
              ✨ Experience the magic of Dropify
            </ShinyButton>
          </span>
          <h1 className="relative capitalize z-10 mx-auto max-w-4xl text-center text-3xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
            Welcome to Dropify your
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-[length:200%_200%] animate-gradient ml-2 bg-clip-text text-transparent">
              Digital sanctuary
            </span>
          </h1>

          <p className="relative z-10 mx-auto max-w-xl py-4 text-center md:text-lg font-normal text-neutral-600 dark:text-neutral-400">
            Upload, organize, and access your files — effortlessly. Dropify
            keeps everything secure and in sync, wherever you go.
          </p>
          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="">
              <Link
                className="flex flex-row space-x-2 items-center"
                href="/dashboard"
              >
                Explore Now
                <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant={"outline"} className="">
              Contact Support
            </Button>
          </div>
          <div className="relative z-10 mt-24 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
            <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
              <video
                autoPlay
                loop
                muted
                className="rounded-lg aspect-[16/9] h-auto w-xl md:h-auto md:w-full object-cover "
              >
                <source src="https://aem.Dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/docsend/user-interface/webm/docsend-permissioning-ui-1080xauto-en_GB.webm" />
                your borser does not support the video tag
              </video>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
