export default function BlogPage() {
  const blogPosts = [
    {
      slug: "my-nextjs-journey",
      title: "My Next.js Learning Journey",
      excerpt: "How I started learning Next.js and what I discovered...",
      date: "2025-07-16",
      readTime: "5 min read",
    },
    {
      slug: "building-contact-form",
      title: "Building an Advanced Contact Form",
      excerpt: "Creating interactive forms with validation in Next.js...",
      date: "2025-07-15",
      readTime: "8 min read",
    },
    {
      slug: "tailwind-tips",
      title: "Tailwind CSS Tips for Beginners",
      excerpt: "Essential Tailwind classes every developer should know...",
      date: "2025-07-14",
      readTime: "6 min read",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          My Learning Blog
        </h1>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                <a
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </a>
              </h2>

              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              <a
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                {" "}
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
