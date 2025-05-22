'use client';

import { useState } from 'react';
import Image from 'next/image';
import { products } from "../data/products";

export default function ProductsPage() {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const toggleExpand = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Handcrafted with traditional wisdom and natural ingredients, our products are designed to
          bring harmony to your health and wellness journey.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
          >
            {/* Product Image */}
            <div className="relative h-64 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
              
              <div className="mb-4">
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Key Benefits */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Key Benefits:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="text-sm">{benefit}</li>
                  ))}
                </ul>
              </div>

              {/* Ingredients (collapsible) */}
              <div className="mb-4">
                <button
                  onClick={() => toggleExpand(`${product.id}-ingredients`)}
                  className="flex items-center text-green-600 hover:text-green-800 text-sm font-medium"
                >
                  <span>View Ingredients</span>
                  <svg
                    className={`ml-1 h-4 w-4 transform ${expandedProduct === `${product.id}-ingredients` ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedProduct === `${product.id}-ingredients` && (
                  <div className="mt-2 p-3 bg-gray-50 rounded-md">
                    <h4 className="font-medium text-gray-800 mb-1">Ingredients:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      {product.ingredients.map((ingredient, idx) => (
                        <li key={idx}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Usage Instructions */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-800 mb-1">How to Use:</h4>
                <p className="text-sm text-gray-600">{product.usage}</p>
                {product.dosage && (
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Dosage:</span> {product.dosage}
                  </p>
                )}
              </div>

              {/* Price and Action */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    ₹{product.price.toFixed(2)}
                  </span>
                  <a
                    href={`https://wa.me/919831574424?text=Hi, I'm interested in purchasing ${product.name}. Can you please provide more details?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <svg className="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0-3.976-3.03-7.25-6.9-7.25-3.87 0-7 3.274-7 7.25 0 1.87.7 3.57 1.85 4.88L5 20l3.08-1.6c1.32.72 2.82 1.1 4.42 1.1 3.87 0 7-3.274 7-7.25zM8.75 7.5c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5zm4.5 0c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5zm-4.5 5c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5zm4.5 0c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5z" clipRule="evenodd" />
                    </svg>
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our wellness experts are here to help you find the perfect products for your needs.
        </p>
        <a
          href="https://wa.me/919831574424"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <svg className="-ml-1 mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0-3.976-3.03-7.25-6.9-7.25-3.87 0-7 3.274-7 7.25 0 1.87.7 3.57 1.85 4.88L5 20l3.08-1.6c1.32.72 2.82 1.1 4.42 1.1 3.87 0 7-3.274 7-7.25zM8.75 7.5c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5zm4.5 0c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5zm-4.5 5c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5zm4.5 0c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5a.75.75 0 01-.75-.75v-1.5z" clipRule="evenodd" />
          </svg>
          Chat with Us on WhatsApp
        </a>
      </div>
    </div>
  );
}
