"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
    const phoneNumber = "919918280347"; // Using the primary contact number
    const message = "Hello, I am interested in your kraft paper packaging solutions.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="relative w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-2xl shadow-2xl flex items-center justify-center cursor-pointer hover:shadow-green-500/30 overflow-hidden"
                >
                    <Image
                        src="/images/whatsapp.png"
                        alt="Chat on WhatsApp"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </Link>
        </div>
    );
}
