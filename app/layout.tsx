import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Dropify - Your Digital Sanctuary",
  description: "Dropify: Your secure digital sanctuary. Upload, store, share, and access all your files effortlessly from anywhere. Simple, reliable cloud storage for everyone.",

  openGraph: {
    url: "https://dropify-chi.vercel.app/", // This URL is used for og:url AND often implicitly for twitter:url
    type: "website",
    title: "Dropify - Your Digital Sanctuary",
    description: "Dropify: Your secure digital sanctuary. Upload, store, share, and access all your files effortlessly from anywhere. Simple, reliable cloud storage for everyone.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/94217478-6e2f-4ae0-b2fb-3d19983c6025.png?token=72-2R2yyUfWeNv6ijBjFQTOouI6cu3bEa-UWqKrNzc0&height=554&width=1200&expires=33284956171",
        width: 1200,
        height: 630,
        alt: "Dropify - Secure Cloud Storage",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    // REMOVED: 'url' property here because it's not directly supported and inferred from openGraph.url
    title: "Dropify - Your Digital Sanctuary",
    description: "Dropify: Your secure digital sanctuary. Upload, store, share, and access all your files effortlessly from anywhere. Simple, reliable cloud storage for everyone.",
    images: {
      url: "https://opengraph.b-cdn.net/production/images/94217478-6e2f-4ae0-b2fb-3d19983c6025.png?token=72-2R2yyUfWeNv6ijBjFQTOouI6cu3bEa-UWqKrNzc0&height=554&width=1200&expires=33284956171",
      alt: "Dropify - Secure Cloud Storage",
    },
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle",
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