import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"
export const metadata: Metadata = {
  title: "Dropify - Your Digital Sanctuary", // Combined HTML <title> and Open Graph title
  description: "Dropify: Your secure digital sanctuary. Upload, store, share, and access all your files effortlessly from anywhere. Simple, reliable cloud storage for everyone.", // HTML <meta name="description"> and Open Graph description
  
  // Open Graph (Facebook/Social Media) Meta Tags
  openGraph: {
    url: "https://dropbox-clone-chi-five.vercel.app/",
    type: "website",
    title: "Dropify - Your Digital Sanctuary",
    description: "Dropify: Your secure digital sanctuary. Upload, store, share, and access all your files effortlessly from anywhere. Simple, reliable cloud storage for everyone.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/94217478-6e2f-4ae0-b2fb-3d19983c6025.png?token=eSmTklU45A6O4hdDhZSVHOk2NthtGNwvmkUPVybKMLw&height=554&width=1200&expires=33284952889", // Using your provided image URL
        width: 1200,
        height: 630, // Common Open Graph image aspect ratio
        alt: "Dropify - Secure Cloud Storage", // Alt text for the image
      },
    ],
  },

  // Twitter Meta Tags
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle", // Optional: replace with your Twitter handle if you have one
    creator: "@your_twitter_handle", // Optional: replace with your Twitter handle
    title: "Dropify - Your Digital Sanctuary",
    description: "Dropify: Your secure digital sanctuary. Upload, store, share, and access all your files effortlessly from anywhere. Simple, reliable cloud storage for everyone.",
    images: {
      url: "https://opengraph.b-cdn.net/production/images/94217478-6e2f-4ae0-b2fb-3d19983c6025.png?token=eSmTklU45A6O4hdDhZSVHOk2NthtGNwvmkUPVybKMLw&height=554&width=1200&expires=33284952889", // Using your provided image URL
      alt: "Dropify - Secure Cloud Storage",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/* No <head> tag needed here, Next.js handles it via `metadata` export */}
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Analytics/>
            <Toaster />
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}