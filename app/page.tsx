"use client";

import { Button, Card, CardBody, CardFooter } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

import { products } from "./data/products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 text-5xl font-bold text-gray-800">
              Natural Wellness, <br />
              Organic Goodness
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-gray-600">
              Discover our premium selection of organic products, carefully
              sourced and crafted for your health and wellbeing.
            </p>
            <Link href="/products">
              <Button
                className="bg-green-600 text-white hover:bg-green-700"
                size="lg"
              >
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardBody className="overflow-visible p-0">
                <div className="relative h-[240px] w-full">
                  <Image
                    fill
                    alt={product.name}
                    className="object-cover rounded-t-xl"
                    src={product.image}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </CardBody>
              <CardFooter className="flex justify-between items-center px-6 pb-6">
                <span className="text-lg font-bold text-green-600">
                  ${product.price}
                </span>
                <Link href={`/products/${product.id}`}>
                  <Button className="bg-green-600 text-white hover:bg-green-700">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
