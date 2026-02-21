"use client";

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import productData from '../data/productDetails.json';

export default function Home() {
    const { addToCart } = useCart();

    // Pick a few products to show as teasers (first 6 for example)
    const teaserProducts = productData.slice(0, 6);

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.title} has been added to the cart!`);
    };

    return (
        <div>
            {/* Banner */}
            <div className="bg-mint-green text-center py-2 text-white font-semibold">
                Free delivery on handmade orders over £150
            </div>

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row w-full h-[500px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
                <div className="w-full md:w-3/5 relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
                    <Image
                        src="/images/iris-crochet-pillow.jpg"
                        alt="Luxury Handmade Hero"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <div className="w-full md:w-2/5 bg-[#E8F5F2] flex items-center justify-center p-8 md:p-12 animate-fade-in">
                    <div className="text-center md:text-left max-w-md z-20">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Luxury Handmade Creations
                        </h1>
                        <p className="text-md md:text-lg text-gray-700 mb-4">
                            Discover beautiful gift bags, carpets, clothing, and accessories made with crochet, macramé, and knitting techniques.
                        </p>
                        <Link
                            href="/products"
                            className="inline-block mt-4 text-white bg-mint-green px-6 py-2 rounded-lg font-semibold hover:bg-teal-500"
                        >
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* Teaser Products Grid */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center animate-fade-in">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    Featured Handmade Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {teaserProducts.map((product) => (
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
            </section>
        </div>
    );
}

