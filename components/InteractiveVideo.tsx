import React from "react";

function InteractiveVideo() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-5 gap-6 p-6 md:p-12 bg-background text-foreground">
      {/* Text Section */}
      <div className="md:col-span-2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 max-w-xl">
          Dropify <span className="text-gradient bg-gradient-to-r from-teal-400 via-green-400 to-cyan-500 bg-clip-text text-transparent">Now More Powerful</span> <br /> With The Power Of AI
        </h1>
        <p className="text-muted-foreground max-w-lg text-lg md:text-xl">
          Unlock smarter file management, lightning-fast search, and AI-driven workflows to work smarter, not harder.
        </p>
      </div>

      {/* Video Section */}
      <section className="md:col-span-3 flex justify-center items-center">
        <div className="w-full rounded-xl overflow-hidden shadow-lg ring-1 ring-accent/30 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-video object-cover"
            src="https://aem.Dropbox.com/cms/content/dam/dropbox/warp/en-us/index/april-2025-launch/hero/dash-multimedia-search-homepage-ui-transparent-1080xauto-v3.webm"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </main>
  );
}

export default InteractiveVideo;
