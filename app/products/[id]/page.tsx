"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

import { products } from "../../data/products";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: Props) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/products"
        className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-green-600">${product.price}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Description
            </h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Benefits</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {product.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Recommended Usage
            </h2>
            <p className="text-gray-600">{product.usage}</p>
          </div>

          <Button
            size="lg"
            className="w-full bg-green-600 text-white hover:bg-green-700"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
} 