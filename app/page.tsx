import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorksSection";
import TestimonialSection from "@/components/TestimonialSection";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col md:flex-row items-center bg-[#1e1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2b2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to DropBox
            <br />
            Storing everything in one place for you and your bussiness
            <br />
          </h1>

          <p className="pb-20">
            Enhance your personal storage with Dropbox, offering a simple and
            efficient way to upload, organize, and access files from anywhere.
            Securely store important documents and media, and experience the
            convenience of easy file management and sharing in one centralized
            solution.
          </p>

          <Link
  href="/dashboard"
  className="group inline-flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 max-w-[200px]"
>
  <span className="font-semibold text-sm tracking-tight">
    Try it for free
  </span>
  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
</Link>
        </div>

        <div className="bg-[#1e1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg w-full">
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/docsend/user-interface/webm/docsend-permissioning-ui-1080xauto-en_GB.webm" />
            your borser does not support the video tag
          </video>
        </div>
      </div>
      {/* Features section */}
      <FeaturesSection />

      {/* how it workds section */}
      <HowItWorks />

      <TestimonialSection />
    </main>
  );
}
