"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
    { name: "Indian Railways", logo: "/images/partners/indian-railways.png" },
    { name: "Swiggy", logo: "/images/partners/swiggy.png" },
    { name: "Goli Vada Pav", logo: "/images/partners/goli.jpg" },
    { name: "Blinkit", logo: "/images/partners/blinkit.png" },
    { name: "Mahesh Masala", logo: "/images/partners/mahesh.jpg" },
    { name: "Good Bakery", logo: "/images/partners/good-bakery.png" },
];

export default function PartnerTicker() {
    return (
        <section className="py-12 bg-white border-b border-kraft-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <p className="text-center text-forest-800/60 font-semibold uppercase tracking-widest text-sm">
                    Trusted By Industry Leaders
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <motion.div
                    className="flex space-x-20 whitespace-nowrap items-center"
                    animate={{ x: [0, -1035] }} // Adjust based on content width
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25, // Slower for better visibility
                            ease: "linear",
                        },
                    }}
                >
                    {/* Triple the list to create seamless loop */}
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div key={index} className="flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105">
                            {partner.logo ? (
                                <div className="relative h-24 w-60">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <span className="text-2xl md:text-3xl font-bold text-forest-900/40 tracking-tight hover:text-forest-900 transition-colors">
                                    {partner.name}
                                </span>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
