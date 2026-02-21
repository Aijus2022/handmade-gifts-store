"use client";

import { useCart } from '../../../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import productData from '../../../data/productDetails.json';

export default function CategoryPage({ params }) {
    const { category } = params; // URL param: /products/[category]
    const { addToCart } = useCart();

    const filteredProducts = productData.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
    );

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.title} added to cart!`);
    };

    return (
        <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize mb-6">
                {category} Collection
            </h1>

            {filteredProducts.length === 0 && (
                <p className="text-gray-600">No products found in this category.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                {filteredProducts.map((product) => (
                    <div key={product._id} className="text-center rounded-lg shadow p-4 hover:shadow-lg transition">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={400}
                            height={400}
                            className="rounded-lg object-cover w-full h-full"
                        />
                        <h3 className="text-lg font-semibold text-gray-700 mt-4">{product.title}</h3>
                        <p className="text-sm text-gray-500">{product.description}</p>
                        <div className="mt-3 flex justify-center gap-2">
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-mint-green text-white px-4 py-1 rounded hover:bg-teal-500 transition"
                            >
                                Add to Cart
                            </button>
                            <Link
                                href={`/product/${product._id}`}
                                className="text-teal-600 font-semibold hover:underline px-4 py-1"
                            >
                                View
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}