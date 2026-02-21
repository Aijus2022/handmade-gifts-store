// src/app/products/page.js
"use client";

import { useCart } from '../../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import productData from '../../data/productDetails.json'; // Fetch all products from JSON

// Extract unique categories from product data
const categories = [...new Set(productData.map(p => p.category))];

export default function Products() {
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
        alert(`${product.title} has been added to the cart!`);
    };

    return (
        <div>
            {/* Mint Green Banner */}
            <div className="bg-mint-green text-center py-2 text-white font-semibold">
                Enjoy FREE DELIVERY on all orders over £150.
            </div>

            {/* Hero Section */}
            <section className="relative w-full h-[500px] md:h-[700px] lg:h-[800px] overflow-hidden">
                <div className="h-[60%] w-full relative">
                    <Image 
                        src="/images/mosaic-crochet-throw.jpg"
                        alt="Handmade Gifts Hero"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                        className="opacity-90"
                    />
                </div>
                <div className="h-[40%] w-full bg-[#E8F5F2] flex items-center justify-center p-8 md:p-12">
                    <div className="text-center max-w-lg">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                            Explore Our Handmade Collections
                        </h1>
                        <p className="text-md md:text-lg text-gray-700">
                            Discover luxury handmade bags, carpets, clothes, hats, and more. Each item is crafted with love using crochet, macrame, and knitting techniques.
                        </p>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Navigation */}
            <nav className="py-4 px-4 md:px-8 text-gray-600 text-sm flex items-center space-x-2">
                <Link href="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link href="/products" className="hover:underline">Products</Link>
            </nav>

            {/* Categories Grid */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center animate-fade-in">
                <h2 className="text-3xl font-semibold text-gray-800">Browse by Category</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Select a category to explore our exquisite handmade gifts.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
                    {categories.map((category, index) => (
                        <Link key={index} href={`/products/${category.toLowerCase()}`} className="group">
                            <div className="rounded-lg overflow-hidden relative h-48 cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300">
                                <Image 
                                    src={`/images/categories/${category.toLowerCase()}.jpg`} // You can add a category image for each
                                    alt={category}
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:brightness-90"
                                />
                                <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                                    <h3 className="text-white text-lg font-semibold">{category}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Products Grid */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center animate-fade-in">
                <h2 className="text-3xl font-semibold text-gray-800">Featured Handmade Products</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Handpicked creations from our skilled artisans.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                    {productData.slice(0, 8).map((product) => (
                        <div key={product._id} className="text-center animate-fade-in-up delay-[100ms] duration-[300ms]">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={400}
                                height={400}
                                className="rounded-lg object-cover w-full h-full"
                            />
                            <h3 className="text-lg font-semibold text-gray-700 mt-4">{product.title}</h3>
                            <p className="text-sm text-gray-500">{product.description}</p>
                            <button 
                                onClick={() => handleAddToCart(product)} 
                                className="text-teal-600 font-semibold hover:underline mt-2 block"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
