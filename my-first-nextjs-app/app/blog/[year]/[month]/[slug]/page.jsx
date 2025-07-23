export default function BlogPost({ params }) {
  const { year, month, slug } = params;
  
  return (
    <article>
      <header>
        <div className="breadcrumb">
          <span>Blog</span> → 
          <span>{year}</span> → 
          <span>{month}</span> → 
          <span>{slug}</span>
        </div>
        <h1>{slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
        <div className="meta">
          <time>Published on {month}/{year}</time>
          <span>By jhaaadarsh7</span>
        </div>
      </header>
      
      <main>
        <p>This is the blog post content for: {slug}</p>
        <p>Published in {month} {year}</p>
        
        <div className="content">
          <h2>Introduction</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          
          <h2>Main Content</h2>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
        </div>
      </main>
    </article>
  );
}