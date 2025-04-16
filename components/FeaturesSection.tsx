import { File, Shield, Share2 } from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
            <File className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
              Easy File Management
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Organize and store your documents and media in one simple, intuitive place. No more chaos!
            </p>
          </div>

          {/* Feature 2 */}
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-green-500 rounded-full opacity-20 blur-2xl"></div>
            <Shield className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
              Secure Cloud Storage
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Your files are protected with state-of-the-art encryption, ensuring privacy and safety at all times.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
            <Share2 className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
              File Sharing Made Easy
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Share files seamlessly with anyone, regardless of their location or device. It's that simple!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
