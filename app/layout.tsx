import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { Inter } from "next/font/google";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organic Products Store",
  description: "Your one-stop shop for premium organic products",
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
    <html suppressHydrationWarning lang="en" className="light">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          inter.className
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            {/* <Navbar /> */}
            <main className="container mx-auto max-w-7xl pt-6 flex-grow">
              {/* Navigation */}
              <nav className="bg-white shadow-sm">
                <div className="container mx-auto px-4">
                  <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-green-600">
                      Organic Store
                    </Link>
                    <div className="flex space-x-8">
                      <Link
                        href="/"
                        className="text-gray-600 hover:text-green-600"
                      >
                        Home
                      </Link>
                      <Link
                        href="/products"
                        className="text-gray-600 hover:text-green-600"
                      >
                        Products
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Main Content */}
              {children}
            </main>
            <footer className="w-full bg-gray-50 mt-auto">
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-green-600">
                      Organic Store
                    </h3>
                    <p className="text-gray-600">
                      Your trusted source for premium organic products.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Quick Links
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/"
                          className="text-gray-600 hover:text-green-600"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products"
                          className="text-gray-600 hover:text-green-600"
                        >
                          Products
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Contact
                    </h3>
                    <p className="text-gray-600">
                      Email: info@organicstore.com
                    </p>
                    <p className="text-gray-600">Phone: (555) 123-4567</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
                  <p>
                    &copy; {new Date().getFullYear()} Organic Store. All rights
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
