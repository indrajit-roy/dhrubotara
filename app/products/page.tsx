"use client";

import { Button, Card, CardBody, CardFooter } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated selection of organic products, made
          with the finest natural ingredients for your health and wellness.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardBody className="overflow-visible p-0">
              <div className="relative h-[300px] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-700">Key Benefits:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {product.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardBody>
            <CardFooter className="flex justify-between items-center px-6 pb-6">
              <span className="text-xl font-bold text-green-600">
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
    </div>
  );
}
