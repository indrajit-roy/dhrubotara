"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto px-6 py-12 space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Our Story
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering your wellness journey with nature's finest ingredients and
          traditional wisdom.
        </p>
      </section>

      {/* Mission Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              At DhruboTara, we believe in the healing power of nature. Our
              mission is to provide high-quality, organic wellness products that
              are carefully crafted using traditional recipes and modern
              scientific knowledge.
            </p>
            <p className="text-gray-600 mb-6">
              We are committed to sustainable practices, ethical sourcing, and
              creating products that promote overall well-being without
              compromising on quality or the environment.
            </p>
            <Link href="/products">
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Explore Our Products
              </Button>
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/images/about-herbs.jpg"
              alt="Organic herbs and ingredients"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Purity</h3>
                <p className="text-gray-600 text-center">
                  We use only the purest, highest quality ingredients with no
                  harmful additives or chemicals.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Effectiveness</h3>
                <p className="text-gray-600 text-center">
                  Formulated with traditional knowledge and modern research for
                  maximum effectiveness.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Tradition</h3>
                <p className="text-gray-600 text-center">
                  Honoring traditional wellness practices while incorporating modern
                  insights to create products for today's lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Meet Our Founder
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3">
              <div className="relative h-64 md:h-full">
                <Image
                  src="/images/founder.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="uppercase tracking-wide text-sm text-green-600 font-semibold mb-2">
                Founder & Herbalist
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                Sushmita Sengupta
              </h3>
              <p className="text-gray-600 mb-4">
                With years of experience in traditional wellness practices,
                Sushmita founded DhruboTara with a vision to make natural
                healing accessible to everyone. Her passion for holistic health
                and deep knowledge of herbal remedies is the foundation of our
                product line.
              </p>
              <p className="text-gray-600">
                &ldquo;I believe that true wellness comes from harmony with
                nature. At DhruboTara, we&apos;re committed to bringing you the
                purest, most effective natural solutions for your health and
                wellbeing.&rdquo;
              </p>
              <div className="mt-6">
                <Link href="/contact">
                  <Button
                    variant="bordered"
                    className="border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
