import { Cloud, Upload, Download, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const steps = [
  {
    title: "Upload Files",
    description:
      "Easily upload files with a simple drag-and-drop interface or the upload button.",
    icon: <Cloud className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-100 dark:bg-blue-900/20",
    btn: "Upload Now",
    btnColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    title: "Organize Files",
    description:
      "Group and manage files into folders to keep everything neat and easy to find.",
    icon: <FileText className="w-6 h-6 text-green-500" />,
    color: "bg-green-100 dark:bg-green-900/20",
    btn: "Organize Now",
    btnColor: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Sync Across Devices",
    description:
      "Your files stay updated across devices so you’re always up to date.",
    icon: <Upload className="w-6 h-6 text-yellow-500" />,
    color: "bg-yellow-100 dark:bg-yellow-900/20",
    btn: "Sync Now",
    btnColor: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    title: "Download Files",
    description:
      "Access your files anytime, anywhere — even bulk download them easily.",
    icon: <Download className="w-6 h-6 text-purple-500" />,
    color: "bg-purple-100 dark:bg-purple-900/20",
    btn: "Download Now",
    btnColor: "bg-purple-500 hover:bg-purple-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
          How It Works
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className={cn(
                "relative z-10 flex flex-col items-center text-center p-6 rounded-2xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-md shadow-md border border-white/10 transition-transform hover:scale-[1.03] duration-300 ease-in-out"
              )}
            >
              <div
                className={cn(
                  "rounded-full p-4 mb-4 shadow-inner",
                  step.color
                )}
              >
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 mb-4">
                {step.description}
              </p>
              <Button className={cn("text-white", step.btnColor)}>
                {step.btn}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
