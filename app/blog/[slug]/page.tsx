import { blogPosts } from '@/lib/blog-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, User, Calendar, Clock } from 'lucide-react';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Generate specific metadata for each post
export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} | Gargi PaperKraft`,
        description: post.excerpt,
        keywords: post.keywords,
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-24 pb-20 bg-white">
            {/* Post Header */}
            <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-forest-600 hover:text-forest-800 transition-colors mb-8 font-medium"
                >
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back to Insights
                </Link>

                <h1 className="text-3xl md:text-5xl font-bold text-forest-950 mb-6 leading-tight">
                    {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-forest-500 text-sm font-medium border-b border-kraft-200 pb-8">
                    <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                    </div>
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                    </div>
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                    </div>
                </div>
            </header>

            {/* Post Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="prose prose-lg prose-forest max-w-none text-forest-800"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-8 border-t border-kraft-200">
                    <h4 className="text-sm font-bold text-forest-400 uppercase tracking-widest mb-4">Related Topics</h4>
                    <div className="flex flex-wrap gap-2">
                        {post.keywords.map((keyword, idx) => (
                            <span key={idx} className="bg-kraft-100 text-forest-800 px-3 py-1 rounded-full text-xs font-semibold">
                                #{keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
