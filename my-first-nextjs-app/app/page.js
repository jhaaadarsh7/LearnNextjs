export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center " >
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">welcome to my Next.js app!</h1>
        <p className="text-xl text-gray-600 mb-8"> 🎉 Congratulations on starting your Next.js journey!</p>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">What's Next?</h2>
          <ul className="text-left space-y-2 text-gray-700">
            <li>✅ Created your first Next.js app</li>
            <li>✅ Added routing with pages</li>
            <li>✅ Styled with Tailwind CSS</li>
            <li>🚀 Ready to build amazing things!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
