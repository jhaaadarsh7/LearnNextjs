import { notFound } from 'next/navigation';

const blogPosts = {
  'my-nextjs-journey': {
    title: 'My Next.js Learning Journey',
    content: `
# My Next.js Learning Journey

When I first started learning Next.js, I was amazed by how powerful it is! Here's what I've discovered so far:

## Getting Started
Creating my first Next.js app was surprisingly easy. The file-based routing system made so much sense.

## Building Components
I learned how to create reusable components and manage state with React hooks.

## Styling with Tailwind
Tailwind CSS has been a game-changer for styling. The utility classes make development so much faster.

## Dynamic Routing
Now I'm exploring dynamic routing, which allows me to create pages dynamically based on URL parameters.

## What's Next?
- API routes and server-side functionality
- Database integration
- Authentication
- Deployment strategies

The journey continues!
    `,
    excerpt: 'My experience learning Next.js from the beginning',
    date: '2025-07-16',
    readTime: '5 min read',
    author: 'jhaaadarsh7',
    category: 'Learning',
    tags: ['Next.js', 'React', 'Web Development'],
    featured: true
  },
  'building-contact-form': {
    title: 'Building an Advanced Contact Form',
    content: `
# Building an Advanced Contact Form

Creating a contact form in Next.js taught me so much about client-side interactivity!

## Form State Management
Using useState to manage form data and validation errors was a great learning experience.

## Validation Logic
I implemented real-time validation that shows errors as users type.

## User Experience
Added loading states, success messages, and smooth animations to make it feel professional.

## Key Features Implemented
- Real-time validation
- Loading states
- Success/error handling
- Responsive design
- Accessibility features

## The Code
The form handles multiple input types, validates email formats, and provides great user feedback.

## Lessons Learned
- Always validate on both client and server side
- User feedback is crucial for good UX
- Accessibility should be built in from the start
    `,
    excerpt: 'Creating interactive forms with validation in Next.js',
    date: '2025-07-15',
    readTime: '8 min read',
    author: 'jhaaadarsh7',
    category: 'Tutorial',
    tags: ['Forms', 'Validation', 'UX'],
    featured: false
  },
  'tailwind-tips': {
    title: 'Tailwind CSS Tips for Beginners',
    content: `
# Tailwind CSS Tips for Beginners

Here are some essential Tailwind classes I wish I knew when starting out:

## Layout Classes
- \`flex\` and \`grid\` for layouts
- \`container mx-auto\` for centered content
- \`space-y-4\` for consistent spacing

## Responsive Design
- \`md:grid-cols-2\` for responsive grids
- \`sm:text-lg\` for responsive typography

## Interactive States
- \`hover:bg-blue-600\` for hover effects
- \`focus:ring-2\` for focus states
- \`transition-colors\` for smooth animations

## Pro Tips
1. Use the Tailwind CSS IntelliSense extension
2. Learn the spacing scale (4 = 1rem)
3. Use arbitrary values sparingly: \`w-[350px]\`
4. Leverage component extraction for repeated patterns

## Common Patterns
- Card: \`bg-white rounded-lg shadow-lg p-6\`
- Button: \`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700\`
- Container: \`max-w-4xl mx-auto px-4\`
    `,
    excerpt: 'Essential Tailwind classes every developer should know',
    date: '2025-07-14',
    readTime: '6 min read',
    author: 'jhaaadarsh7',
    category: 'CSS',
    tags: ['Tailwind', 'CSS', 'Styling'],
    featured: false
  },
  'dynamic-routing-deep-dive': {
    title: 'Dynamic Routing in Next.js: A Deep Dive',
    content: `
# Dynamic Routing in Next.js: A Deep Dive

Let's explore the powerful dynamic routing capabilities of Next.js!

## Basic Dynamic Routes
Files like \`[slug].js\` create dynamic routes that can match any path segment.

## Catch-All Routes
Use \`[...slug].js\` to catch multiple path segments.

## Optional Catch-All
Use \`[[...slug]].js\` for optional segments.

## Advanced Patterns
- Nested dynamic routes
- Multiple dynamic segments
- Route groups
- Parallel routes

## Real-World Examples
1. Blog with categories: \`/blog/[category]/[slug]\`
2. User profiles: \`/users/[userId]/posts/[postId]\`
3. Documentation: \`/docs/[...path]\`

Dynamic routing is what makes Next.js so powerful for building scalable applications!
    `,
    excerpt: 'Understanding all aspects of Next.js dynamic routing',
    date: '2025-07-16',
    readTime: '10 min read',
    author: 'jhaaadarsh7',
    category: 'Advanced',
    tags: ['Next.js', 'Routing', 'Advanced'],
    featured: true
  }
};

// Generate static params for better performance (optional)
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

// Generate dynamic metadata - FIXED: await params
export async function generateMetadata({ params }) {
  const { slug } = await params; // AWAIT params here
  const post = blogPosts[slug];
  
  if (!post) {
    return {
      title: 'Post Not Found | My Next.js Learning Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | My Next.js Learning Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

// Main component - FIXED: await params
export default async function BlogPost({ params }) {
  const { slug } = await params; // AWAIT params here
  const post = blogPosts[slug];

  // If post doesn't exist, show 404
  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = Object.entries(blogPosts)
    .filter(([postSlug, postData]) => 
      postSlug !== slug && postData.category === post.category
    )
    .slice(0, 2)
    .map(([postSlug, postData]) => ({
      slug: postSlug,
      ...postData
    }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-blue-100">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li className="text-blue-300">›</li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li className="text-blue-300">›</li>
              <li className="text-blue-200">{post.title}</li>
            </ol>
          </nav>

          {/* Article header */}
          <header>
            {/* Category badge */}
            <div className="mb-4">
              <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.featured && (
                <span className="ml-2 inline-block bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-4 text-blue-100 mb-6">
              <div className="flex items-center">
                <span className="text-sm">📅 {post.date}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">⏱️ {post.readTime}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">👤 By {post.author}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>
        </div>
      </div>

      {/* Article content */}
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {post.content}
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Posts in {post.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{relatedPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <a
                      href={`/blog/${relatedPost.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {relatedPost.title}
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                  
                  <a
                    href={`/blog/${relatedPost.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Navigation */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Continue Your Learning Journey
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/blog"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
            >
              📚 View All Posts
            </a>
            <a 
              href="/projects"
              className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors text-center font-medium"
            >
              🚀 Check Out Projects
            </a>
            <a 
              href="/contact"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center font-medium"
            >
              💬 Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}