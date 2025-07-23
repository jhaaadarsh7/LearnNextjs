export default function DocsPage({ params }) {
      const { slug } = params;
  const pathSegments = slug || [];
  
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/docs/' + pathSegments.slice(0, index + 1).join('/');
    return { name: segment, href };
  });
    return(
    <div className="docs-container">
      <nav className="breadcrumb">
        <a href="/docs">Docs</a>
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            {' → '}
            <a href={crumb.href}>
              {crumb.name.replace(/-/g, ' ')}
            </a>
          </span>
        ))}
      </nav>
      
      <main>
        <h1>{pathSegments[pathSegments.length - 1]?.replace(/-/g, ' ') || 'Documentation'}</h1>
        
        {pathSegments.length === 0 ? (
          <div>
            <h2>Welcome to Documentation</h2>
            <ul>
              <li><a href="/docs/getting-started">Getting Started</a></li>
              <li><a href="/docs/api/overview">API Overview</a></li>
              <li><a href="/docs/tutorials/basics">Tutorials</a></li>
            </ul>
          </div>
        ) : (
          <div>
            <p>Documentation for: {pathSegments.join(' → ')}</p>
            <div className="doc-content">
              <h3>Content goes here</h3>
              <p>This would contain the actual documentation content.</p>
            </div>
          </div>
        )}
      </main>
    </div>

    )
}