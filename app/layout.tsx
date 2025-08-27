import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Inter } from "next/font/google";

import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import { ResponsiveNavbar } from "@/components/responsive-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DhruboTara - Natural Wellness & Organic Products",
  description:
    "Discover our premium selection of organic and natural wellness products, carefully sourced and crafted for your health and wellbeing.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="light" lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          inter.className,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            {/* <Navbar /> */}
            <main className="container mx-auto max-w-7xl flex-grow">
              {/* Navigation */}
              <ResponsiveNavbar />

              {/* Main Content */}
              {children}
            </main>
            <footer className="w-full bg-gray-50 mt-auto">
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-green-600">
                      DhruboTara
                    </h3>
                    <p className="text-gray-600">
                      Natural wellness and organic goodness for your health and
                      wellbeing.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Quick Links
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          className="text-gray-600 hover:text-green-600 transition-colors"
                          href="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-600 hover:text-green-600 transition-colors"
                          href="/products"
                        >
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-600 hover:text-green-600 transition-colors"
                          href="/testimonials"
                        >
                          Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-600 hover:text-green-600 transition-colors"
                          href="/about"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-600 hover:text-green-600 transition-colors"
                          href="/contact"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Contact
                    </h3>
                    <p className="text-gray-600">
                      Email: contact@dhrubotara.com
                    </p>
                    <p className="text-gray-600">Phone: +91 98315 74424</p>
                    <p className="text-gray-600">Kolkata, West Bengal, India</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
                  <p>
                    &copy; {new Date().getFullYear()} DhruboTara. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
