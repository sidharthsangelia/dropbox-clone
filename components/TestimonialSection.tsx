
import { User } from "lucide-react"; // Optional icon
import { Card, CardHeader } from "./ui/card";

export default function Testimonials() {
  return (
    <section className="py-16 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-slate-900 dark:text-slate-100 mb-10">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <Card className="bg-slate-200 dark:bg-slate-700 shadow-xl rounded-lg p-6">
            <CardHeader className="flex items-center space-x-4 mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="User 1"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">John Doe</h3>
                <p className="text-slate-600 dark:text-slate-300">Software Developer</p>
              </div>
            </CardHeader>
            <div>
              <p className="text-slate-600 dark:text-slate-300">
                "Dropbox has transformed the way I manage my files. The easy file sharing and seamless
                syncing across devices make it my go-to solution for all my projects."
              </p>
            </div>
          </Card>
          
          {/* Testimonial 2 */}
          <Card className="bg-slate-200 dark:bg-slate-700 shadow-xl rounded-lg p-6">
            <CardHeader className="flex items-center space-x-4 mb-6">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="User 2"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Jane Smith</h3>
                <p className="text-slate-600 dark:text-slate-300">Digital Marketer</p>
              </div>
            </CardHeader>
            <div>
              <p className="text-slate-600 dark:text-slate-300">
                "With Dropbox, I can easily share large files with my team, collaborate in real-time, and
                feel confident that all my work is securely backed up."
              </p>
            </div>
          </Card>

          {/* Testimonial 3 */}
          <Card className="bg-slate-200 dark:bg-slate-700 shadow-xl rounded-lg p-6">
            <CardHeader className="flex items-center space-x-4 mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/56.jpg"
                alt="User 3"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Michael Lee</h3>
                <p className="text-slate-600 dark:text-slate-300">Entrepreneur</p>
              </div>
            </CardHeader>
            <div>
              <p className="text-slate-600 dark:text-slate-300">
                "Dropbox has been a lifesaver! I can access my documents from anywhere, making my business
                operations smooth and efficient."
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
