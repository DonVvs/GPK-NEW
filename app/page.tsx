"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Truck } from "lucide-react";
import { motion } from "framer-motion";
import PartnerTicker from "@/components/PartnerTicker";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-forest-950">
        <div className="absolute inset-0 opacity-40">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-poster.png"
          >
            {/* Placeholder video source - user can drop in a real file here later */}
            <source src="/videos/hero-background.webm" type="video/webm" />
          </video>

          {/* Overlay Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-kraft-100 mb-6 tracking-tight">
              Engineered for Sustainability. <br />
              <span className="text-forest-400">Built for Scale.</span>
            </h1>
            <p className="text-xl md:text-2xl text-kraft-200 mb-10 max-w-3xl mx-auto font-light">
              Premium kraft paper packaging solutions. Flat, Square, and V Bottom bags designed for global industry leaders.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="bg-forest-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-forest-800 transition-all flex items-center shadow-xl shadow-forest-900/20 group"
              >
                Explore Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-kraft-400 text-kraft-100 hover:bg-kraft-400 hover:text-forest-900 rounded-full font-semibold text-lg transition-all"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <PartnerTicker />

      {/* Value Props - Engineering Blueprint Design */}
      <section className="py-24 bg-forest-950 relative overflow-hidden border-t border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-20">
            <h2 className="text-kraft-400 font-mono tracking-widest uppercase text-xs mb-3 flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-kraft-400/30"></span>
              CORE COMPETENCIES
              <span className="h-px w-8 bg-kraft-400/30"></span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Engineered for <span className="text-forest-400">Impact</span>
            </h3>
          </div>

          {/* Technical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-forest-800/50 divide-y md:divide-y-0 md:divide-x divide-forest-800/50">

            {/* Feature 01 */}
            <div className="group relative p-10 hover:bg-forest-900/20 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="text-6xl font-black text-forest-800 font-mono">01</span>
              </div>
              <div className="mb-8 relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm border border-kraft-400/20 text-kraft-400 group-hover:border-kraft-400 group-hover:scale-110 transition-all duration-300">
                  <Leaf className="w-6 h-6 stroke-1" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-kraft-300 transition-colors">100% Sustainable</h4>
              <p className="text-forest-300/60 leading-relaxed text-sm font-light">
                Responsibly sourced material foundation. Fully biodegradable matrix ensures zero environmental footprint post-lifecycle.
              </p>
            </div>

            {/* Feature 02 */}
            <div className="group relative p-10 hover:bg-forest-900/20 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="text-6xl font-black text-forest-800 font-mono">02</span>
              </div>
              <div className="mb-8 relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm border border-kraft-400/20 text-kraft-400 group-hover:border-kraft-400 group-hover:scale-110 transition-all duration-300">
                  <ShieldCheck className="w-6 h-6 stroke-1" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-kraft-300 transition-colors">High Tensile Strength</h4>
              <p className="text-forest-300/60 leading-relaxed text-sm font-light">
                Engineered load capacity exceeding industry standards (BF 24-35). Structural integrity maintained under vertical stress.
              </p>
            </div>

            {/* Feature 03 */}
            <div className="group relative p-10 hover:bg-forest-900/20 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="text-6xl font-black text-forest-800 font-mono">03</span>
              </div>
              <div className="mb-8 relative">
                <div className="w-12 h-12 flex items-center justify-center rounded-sm border border-kraft-400/20 text-kraft-400 group-hover:border-kraft-400 group-hover:scale-110 transition-all duration-300">
                  <Truck className="w-6 h-6 stroke-1" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-kraft-300 transition-colors">Pan-India Delivery</h4>
              <p className="text-forest-300/60 leading-relaxed text-sm font-light">
                Reliable logistics network covering all major Indian metros. Commitment to best-in-class quality standards.
              </p>
            </div>

          </div>

          <div className="mt-12 flex justify-center opacity-60">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-forest-800 rounded-full"></div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Product Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-forest-900 mb-4">Our Core Solutions</h2>
          <p className="text-forest-700/80 mb-16 max-w-2xl mx-auto">Precision-manufactured bags tailored to your brand's specifications.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              title="Flat Bottom Bags"
              desc="Stable base, perfect for retail and takeaways."
              color="bg-kraft-200"
              imageSrc="/images/flat-bottom.png"
            />
            <ProductCard
              title="Square Bottom Bags"
              desc="Maximized volume with a classic structured look."
              color="bg-kraft-300"
              imageSrc="/images/square-bottom.png"
            />
            <ProductCard
              title="V Bottom Bags"
              desc="Sharp V-bottoms for efficient stacking and pharmacy use."
              color="bg-kraft-400"
              imageSrc="/images/v-bottom.png"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-900 text-kraft-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Switch to Sustainable Packaging?</h2>
          <p className="text-xl text-forest-200 mb-10">Get a custom quote for your bulk order today. Pan-India delivery available.</p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-kraft-500 hover:bg-kraft-400 text-white rounded-lg font-bold text-xl shadow-xl transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-start text-left p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-kraft-400/50 hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="mb-6 p-3 bg-forest-900 rounded-lg border border-forest-800 group-hover:border-kraft-500/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-kraft-300 transition-colors">{title}</h3>
      <p className="text-forest-200/70 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
}

function ProductCard({ title, desc, color, imageSrc }: { title: string, desc: string, color: string, imageSrc: string }) {
  return (
    <div className="group cursor-pointer">
      <div className={`h-80 ${color} rounded-3xl mb-6 flex items-center justify-center relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 p-8`}>
        <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-forest-900 mb-2">{title}</h3>
      <p className="text-forest-700/70">{desc}</p>
    </div>
  );
}
