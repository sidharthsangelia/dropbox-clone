import { Card, CardHeader } from "./ui/card";

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Real stories from people who rely on us to power their workflow,
            boost productivity, and grow their businesses.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <CardHeader className="flex items-center gap-4 mb-4 p-0">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s profile`}
                  className="w-14 h-14 rounded-full object-cover border border-slate-300 dark:border-slate-600"
                />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </CardHeader>
              <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                “{testimonial.feedback}”
              </div>
              {/* Optional rating section */}
              {/* <div className="mt-4 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "John Doe",
    role: "Software Developer",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback:
      "This app has transformed the way I manage projects. It’s fast, reliable, and incredibly easy to use.",
  },
  {
    name: "Jane Smith",
    role: "Digital Marketer",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "A game-changer! I can share assets with my team in seconds and everything stays organized. Highly recommend.",
  },
  {
    name: "Michael Lee",
    role: "Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    feedback:
      "I run my entire business on this platform. The collaboration tools and speed are unmatched.",
  },
];
