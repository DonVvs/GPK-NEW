import Link from 'next/link';
import Image from 'next/image';
import { Factory, Award, Leaf } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-forest-950 text-kraft-100 py-12 border-t border-forest-900 relative overflow-hidden">
            {/* Centered Tree Background */}
            {/* Centered Tree Background */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 opacity-20 pointer-events-none w-[700px] h-[525px] mix-blend-screen">
                <Image
                    src="/images/footer-tree-v2.jpg"
                    alt="Footer Tree"
                    fill
                    className="object-contain object-bottom"
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Image
                            src="/logo.png"
                            alt="Gargi PaperKraft"
                            width={160}
                            height={60}
                            className="h-12 w-auto brightness-0 invert opacity-90"
                        />
                        <p className="text-forest-200 text-sm leading-relaxed">
                            Engineered for sustainability. Built for scale. Providing premium paper packaging solutions for global industries.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <div className="p-2 bg-forest-900 rounded-lg border border-forest-800">
                                <Leaf className="w-5 h-5 text-kraft-400" />
                            </div>
                            <div className="p-2 bg-forest-900 rounded-lg border border-forest-800">
                                <Factory className="w-5 h-5 text-kraft-400" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-forest-200">
                            <li><a href="/" className="hover:text-kraft-400 transition">Home</a></li>
                            <li><a href="/products" className="hover:text-kraft-400 transition">Our Products</a></li>
                            <li><a href="/manufacturing" className="hover:text-kraft-400 transition">Manufacturing</a></li>
                            <li><a href="/blog" className="hover:text-kraft-400 transition">Industry Insights</a></li>
                            <li><a href="/about" className="hover:text-kraft-400 transition">About Us</a></li>
                        </ul>
                    </div>

                    {/* Contact - Expanded Width */}
                    <div className="col-span-2">
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-forest-200">
                            <div className="space-y-3">
                                <p><strong className="text-white">Registered Office:</strong><br />B-33, Dayal Greens Phase - I, Dewa Road,<br />Near Kunwar Global School, Lucknow, Uttar Pradesh – 226019</p>
                                <p><strong className="text-white">Works:</strong><br />Plot No-20, Goyala Industrial Area,<br />Near Paras Biotech, Chinhat, Dewa Road,<br />Lucknow, Uttar Pradesh - 226019</p>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-3">
                                    <p className="flex items-center"><span className="text-kraft-400 mr-2">📞</span> +91 9918280347 / +91 7007922573</p>
                                    <p className="flex items-center"><span className="text-kraft-400 mr-2">✉️</span> gargi.paperkraft@gmail.com</p>
                                    <p className="italic opacity-80">
                                        "Do you have questions? Send us an email and we’ll get in touch shortly."
                                    </p>
                                </div>

                                {/* Google Map - Placed here as requested */}
                                <div className="h-40 w-full rounded-xl overflow-hidden shadow-lg border border-forest-800/50 mt-4">
                                    <iframe
                                        src="https://maps.google.com/maps?q=Gargi+PaperKraft+Lucknow&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-full filter grayscale hover:grayscale-0 transition-opacity duration-700 opacity-60 hover:opacity-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-forest-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-forest-400">
                    <p>© {new Date().getFullYear()} Gargi PaperKraft. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
