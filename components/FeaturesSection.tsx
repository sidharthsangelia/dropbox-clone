import { File, Shield, Share2, Cloud, Lock, UploadCloud } from "lucide-react";

export default function Features() {
  return (
    <section className="relative py-20 md:py-32 bg-[var(--background)] overflow-hidden">
      {/* Background pattern 1 (Angular Swipe) */}
      <div
        aria-hidden="true"
        className="absolute -top-40 md:-top-60 left-0 -z-0 transform-gpu overflow-hidden px-36 blur-3xl opacity-70" // Increased opacity and moved slightly more into view
      >
        <div
          style={{
            clipPath:
              "polygon(0 0, 80% 0, 100% 20%, 20% 100%, 0% 80%)",
            background: 'linear-gradient(to bottom right, var(--accent), var(--secondary))',
            opacity: '0.4', // Adjusted for more visibility with blur
            width: '100%',
            height: '700px', // Made slightly taller for more presence
          }}
          className="mx-auto aspect-[1155/678] w-[70rem]" // Larger width for more coverage
        />
      </div>

      {/* Background pattern 2 (Organic Blob) */}
      <div
        aria-hidden="true"
        className="absolute -bottom-40 md:-bottom-60 right-0 -z-0 transform-gpu overflow-hidden px-36 blur-3xl opacity-70" // Increased opacity and moved slightly more into view
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            background: 'linear-gradient(to top left, var(--chart-1), var(--chart-5))',
            opacity: '0.35', // Adjusted for visibility
            width: '100%',
            height: '800px', // Made taller
          }}
          className="mx-auto aspect-[1155/678] w-[80rem]" // Larger width for more coverage
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[var(--foreground)] mb-12 md:mb-20 font-sans tracking-tight">
          Powerful Features, Simple Solutions
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:grid-rows-5 max-w-full">
          {/* Feature 1: Easy File Management */}
          <div
            className="lg:col-span-2 lg:row-span-2 p-8 rounded-[var(--radius)] shadow-[var(--shadow-md)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-lg)]
                       relative overflow-hidden group border border-[var(--border)]" // Added border
            style={{
              backgroundColor: 'hsla(var(--card-hsl), 0.7)', // Slightly more transparent card background with HSL
              backdropFilter: 'blur(16px)', // Increased blur for stronger glassmorphism
            }}
          >
            {/* Optional subtle gradient overlay for glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <File className="w-10 h-10 mb-4 text-[var(--primary)]" />
            <h3 className="text-2xl font-semibold mb-2 font-sans text-[var(--foreground)]">
              Effortless File Management
            </h3>
            <p className="text-base text-[var(--muted-foreground)] font-sans">
              Streamline your workflow. Organize, upload, and access all your documents and media with intuitive ease.
            </p>
          </div>

          {/* Feature 2: Secure Cloud Storage */}
          <div
            className="lg:col-span-2 lg:row-span-3 lg:col-start-1 lg:row-start-3 p-8 rounded-[var(--radius)] shadow-[var(--shadow-md)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-lg)]
                       relative overflow-hidden group border border-[var(--border)]"
            style={{
              backgroundColor: 'hsla(var(--card-hsl), 0.7)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--chart-2)]/5 via-transparent to-[var(--chart-4)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <Shield className="w-10 h-10 mb-4 text-[var(--chart-2)]" />
            <h3 className="text-2xl font-semibold mb-2 font-sans text-[var(--foreground)]">
              Bank-Grade Security
            </h3>
            <p className="text-base text-[var(--muted-foreground)] font-sans">
              Your data is paramount. Enjoy peace of mind with advanced encryption and robust cloud architecture.
            </p>
          </div>

          {/* Feature 3: File Sharing Made Easy */}
          <div
            className="lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-1 p-8 rounded-[var(--radius)] shadow-[var(--shadow-md)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-lg)]
                       relative overflow-hidden group border border-[var(--border)]"
            style={{
              backgroundColor: 'hsla(var(--card-hsl), 0.7)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--chart-3)]/5 via-transparent to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <Share2 className="w-10 h-10 mb-4 text-[var(--chart-3)]" />
            <h3 className="text-2xl font-semibold mb-2 font-sans text-[var(--foreground)]">
              Seamless Sharing & Collaboration
            </h3>
            <p className="text-base text-[var(--muted-foreground)] font-sans">
              Share files securely with anyone, anywhere. Collaborate effortlessly with team members in real-time.
            </p>
          </div>

          {/* Feature 4: Quick Uploads */}
          <div
            className="lg:col-span-3 lg:row-span-2 lg:col-start-3 lg:row-start-4 p-8 rounded-[var(--radius)] shadow-[var(--shadow-md)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-lg)]
                       relative overflow-hidden group border border-[var(--border)]"
            style={{
              backgroundColor: 'hsla(var(--card-hsl), 0.7)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--chart-4)]/5 via-transparent to-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <UploadCloud className="w-10 h-10 mb-4 text-[var(--chart-4)]" />
            <h3 className="text-2xl font-semibold mb-2 font-sans text-[var(--foreground)]">
              Lightning-Fast Uploads
            </h3>
            <p className="text-base text-[var(--muted-foreground)] font-sans">
              No more waiting. Drag-and-drop or select multiple files for instant uploads, even large ones.
            </p>
          </div>

          {/* Feature 5: End-to-End Privacy */}
          <div
            className="lg:row-span-3 lg:col-start-5 lg:row-start-1 p-8 rounded-[var(--radius)] shadow-[var(--shadow-md)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-lg)]
                       relative overflow-hidden group border border-[var(--border)]"
            style={{
              backgroundColor: 'hsla(var(--card-hsl), 0.7)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--destructive)]/5 via-transparent to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <Lock className="w-10 h-10 mb-4 text-[var(--destructive)]" />
            <h3 className="text-2xl font-semibold mb-2 font-sans text-[var(--foreground)]">
              Absolute Privacy Control
            </h3>
            <p className="text-base text-[var(--muted-foreground)] font-sans">
              Your privacy, guaranteed. End-to-end encryption ensures only you and your recipients access shared files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}