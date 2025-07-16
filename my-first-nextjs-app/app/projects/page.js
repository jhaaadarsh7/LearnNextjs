export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Todo App",
      description: "A simple task management app built with Next.js",
      tech: ["Next.js", "React", "Tailwind CSS"],
      status: "In Progress"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Real-time weather information with beautiful UI",
      tech: ["Next.js", "API Integration", "CSS"],
      status: "Planned"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my projects",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          My Projects
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            🚀 More projects coming soon as I learn Next.js!
          </p>
        </div>
      </div>
    </div>
  );
}