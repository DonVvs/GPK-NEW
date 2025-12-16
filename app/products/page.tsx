"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const products = [
    {
        id: "flat-bottom",
        title: "Flat Bottom Bags",
        subtitle: "The Retail Standard",
        description: "Engineered for stability and presentation. Our flat bottom bags stand upright on their own, making them perfect for retail display, food delivery, and premium packaging. Available with reinforced handles for heavy loads.",
        features: ["Self-standing design for easy filling", "High weight capacity (up to 15kg)", "Perfect for branding visibility", "Food-grade certified materials"],
        image: "/images/flat-bottom.png",
        color: "bg-orange-50"
    },
    {
        id: "square-bottom",
        title: "Square Bottom Bags",
        subtitle: "Maximum Volume",
        description: "The classic choice for groceries and bulk items. The square bottom construction maximizes interior space, allowing for efficient packing of boxes and rectangular items without tearing.",
        features: ["Optimized volume-to-surface ratio", "Classic grocery style", "Cost-effective production", "Available in 50gsm to 120gsm"],
        image: "/images/square-bottom.png",
        color: "bg-stone-50"
    },
    {
        id: "v-bottom",
        title: "V Bottom Bags",
        subtitle: "Compact & Economical",
        description: "Smart, space-saving design ideal for pharmacies, bakeries, and lightweight retail. These bags store flat and pop open instantly, streamlining high-volume checkout processes.",
        features: ["Ultra-slim storage profile", "Instant deployment", "Most economical choice", "Grease-resistant options available"],
        image: "/images/v-bottom.png",
        color: "bg-emerald-50"
    }
];

export default function ProductsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section - Extending to top to sit behind navbar */}
            <section className="relative pt-32 pb-16 bg-forest-900 text-white overflow-hidden">

                {/* Background Image - User to replace 'products-hero.png' */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/products-hero.jpg"
                        alt="Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Subtle Green Overlay */}
                    <div className="absolute inset-0 bg-forest-900/85 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-b from-forest-900/50 to-forest-900" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full border border-forest-400/30 bg-forest-800/50 text-forest-200 text-xs font-medium mb-4 backdrop-blur-sm uppercase tracking-wider">
                            Premium Packaging Solutions
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Engineered for <span className="text-kraft-300">Excellence</span>
                        </h1>
                        <p className="text-lg text-forest-200/90 max-w-2xl mx-auto leading-relaxed">
                            Precision-crafted kraft paper bags for retail, industrial, and food sectors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Showcase - Zig Zag Layout */}
            <section className="py-20 space-y-24">
                {products.map((product, index) => (
                    <div key={product.id} className="relative">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-1 space-y-6"
                                >
                                    <div>
                                        <div className="text-kraft-600 font-bold tracking-wider uppercase mb-1 text-sm">{product.subtitle}</div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">{product.title}</h2>
                                        <p className="text-base text-forest-700 leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {product.features.map((feature, i) => (
                                            <div key={i} className="flex items-center space-x-2 text-forest-800 font-medium text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-2">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center space-x-2 text-forest-900 font-bold border-b-2 border-kraft-500 hover:border-forest-900 transition-all pb-1 hover:space-x-4 text-sm"
                                        >
                                            <span>Request Specifications</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>

                                {/* Image Content */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full lg:flex-1 relative group"
                                >
                                    <div className="absolute inset-0 bg-kraft-100 rounded-[2.5rem] transform rotate-2 group-hover:rotate-1 transition-transform duration-500 opacity-50" />
                                    <div className="relative bg-white rounded-[2rem] p-6 shadow-xl border border-kraft-100 overflow-hidden">
                                        <div className="h-80 w-full sm:h-96 lg:h-auto lg:aspect-[4/5] relative">
                                            <Image
                                                src={product.image}
                                                alt={product.title}
                                                fill
                                                className="object-contain transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-forest-900 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-6">Not finding what you need?</h2>
                    <p className="text-lg text-forest-200 mb-8">
                        Our engineering team can develop custom tooling for unique dimensions and specifications.
                        From window patching to 8-color flexographic printing, we do it all.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-kraft-500 text-forest-900 px-8 py-4 rounded-full font-bold text-base hover:bg-kraft-400 hover:scale-105 transition-all shadow-xl shadow-forest-900/50"
                    >
                        Start a Custom Project
                    </Link>
                </div>
            </section>
        </div>
    );
}
