// This is the dynamic route that shows individual blog posts
export default function BlogPost({ params }) {
  // The 'params' object contains the dynamic part of the URL
  const { slug } = params;
  
  // In a real app, you'd fetch this data from a database
  // For now, we'll simulate it with static data
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
        
        ## What's Next?
        Now I'm learning about dynamic routing, API routes, and database integration. Excited for the journey ahead!
      `,
      date: '2025-07-16',
      readTime: '5 min read',
      author: 'jhaaadarsh7'
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
        
        ## The Code
        The form handles multiple input types, validates email formats, and provides great user feedback.
      `,
      date: '2025-07-15',
      readTime: '8 min read',
      author: 'jhaaadarsh7'
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
      `,
      date: '2025-07-14',
      readTime: '6 min read',
      author: 'jhaaadarsh7'
    }
  };

  // Get the specific post data
  const post = blogPosts[slug];
  
  // Handle case where post doesn't exist
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <a 
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back to blog link */}
        <nav className="mb-8">
          <a 
            href="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Blog
          </a>
        </nav>
        
        {/* Article header */}
        <header className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
        </header>
        
        {/* Article content */}
        <article className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            {/* In a real app, you'd use a markdown parser here */}
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {post.content}
            </div>
          </div>
        </article>
        
        {/* Navigation to other posts */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Continue Reading
          </h3>
          <div className="flex justify-between">
            <a 
              href="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Posts
            </a>
            <a 
              href="/projects"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Check Out My Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}