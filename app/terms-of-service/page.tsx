export default function TermsOfService() {
    return (
        <div className="bg-white min-h-screen py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-forest-900 mb-8">Terms of Service</h1>
                <div className="prose prose-forest max-w-none text-forest-700">
                    <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
                    <p>
                        Welcome to Gargi PaperKraft. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.
                    </p>

                    <h2 className="text-2xl font-bold text-forest-800 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By using our website, you confirm that you accept these Terms of Service and that you agree to comply with them. If you do not agree to these terms, you must not use our site.
                    </p>

                    <h2 className="text-2xl font-bold text-forest-800 mt-8 mb-4">2. Products and Orders</h2>
                    <p>
                        All orders are subject to acceptance and availability. We reserve the right to refuse service to anyone for any reason at any time. Prices for our products are subject to change without notice.
                    </p>

                    <h2 className="text-2xl font-bold text-forest-800 mt-8 mb-4">3. Intelectual Property</h2>
                    <p>
                        The content on this website, including text, graphics, logos, and images, is the property of Gargi PaperKraft and is protected by copyright laws.
                    </p>

                    <h2 className="text-2xl font-bold text-forest-800 mt-8 mb-4">4. Limitation of Liability</h2>
                    <p>
                        Gargi PaperKraft shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                    </p>

                    <h2 className="text-2xl font-bold text-forest-800 mt-8 mb-4">5. Governing Law</h2>
                    <p>
                        These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                    </p>
                </div>
            </div>
        </div>
    );
}
