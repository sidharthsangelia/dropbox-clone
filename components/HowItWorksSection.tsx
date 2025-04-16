import { Cloud, Upload, Download, FileText } from "lucide-react";
import { cn } from "@/lib/utils"; // assuming you use className utility

const steps = [
  {
    title: "Upload Files",
    description:
      "Easily upload files with a simple drag-and-drop interface or the upload button.",
    icon: <Cloud className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-100 dark:bg-blue-900/30",
    btn: "Upload Now",
    btnColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    title: "Organize Files",
    description:
      "Group and manage files into folders to keep everything neat and easy to find.",
    icon: <FileText className="w-6 h-6 text-green-500" />,
    color: "bg-green-100 dark:bg-green-900/30",
    btn: "Organize Now",
    btnColor: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Sync Across Devices",
    description:
      "Your files stay updated across devices so you’re always up to date.",
    icon: <Upload className="w-6 h-6 text-yellow-500" />,
    color: "bg-yellow-100 dark:bg-yellow-900/30",
    btn: "Sync Now",
    btnColor: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    title: "Download Files",
    description:
      "Access your files anytime, anywhere — even bulk download them easily.",
    icon: <Download className="w-6 h-6 text-purple-500" />,
    color: "bg-purple-100 dark:bg-purple-900/30",
    btn: "Download Now",
    btnColor: "bg-purple-500 hover:bg-purple-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
          How It Works
        </h2>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-300 dark:bg-slate-700 z-0 hidden lg:block"></div>

          {steps.map((step, i) => (
            <div
              key={i}
              className={cn(
                "relative z-10 text-center flex flex-col items-center space-y-4",
                "lg:max-w-xs"
              )}
            >
              <div
                className={cn(
                  "rounded-full p-4 shadow-xl backdrop-blur-md",
                  step.color,
                  "transition-transform duration-300 hover:scale-110"
                )}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {step.description}
              </p>
              <button
                className={cn(
                  "px-4 py-2 mt-2 rounded-md text-white shadow-md text-sm transition-all",
                  step.btnColor
                )}
              >
                {step.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
