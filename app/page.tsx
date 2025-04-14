import { ArrowRight } from "lucide-react";
import Image from "next/image";
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

          <Link href="/dashboard" className="flex bg-blue-500 p-5 w-fit rounded-sm">
            Try it for free
            <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1e1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg w-full">
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/docsend/user-interface/webm/docsend-permissioning-ui-1080xauto-en_GB.webm"/>
            your borser does not support the video tag
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This video is made for informational and educational purposes only. We
        do not own or affiliate with Dropbox or/and any of its subsidiaries in
        any form. Copyright Disclaimer under section 107 of the Copyright Act
        1976, allowance is made for “fair use” of this video for education
        purposes.
      </p>
    </main>
  );
}
