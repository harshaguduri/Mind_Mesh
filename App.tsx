import React from 'react';

const App: React.FC = () => {
  // Array of entities for easy management
  const entities = [
    'Prompt Engineering',
    'Generative AI',
    'Web Development',
    'Data Analysis with AI',
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 antialiased">
      <div className="w-full max-w-2xl text-center">
        
        {/* --- LOGO CHANGED HERE --- */}
        <div className="mb-6">
          {/* The SVG was replaced with this img tag */}
          <img 
            src="/brain-logo.png" 
            alt="Mind Mesh Logo" 
            className="w-24 h-24 mx-auto" 
          />
        </div>
        {/* --- END OF CHANGE --- */}

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          MIND MESH
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Master AI. Shape the Future
        </p>
        <div className="p-6 bg-gray-800/50 rounded-lg shadow-2xl border border-gray-700 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-3 text-cyan-400">PRESENTED BY : HARSHA VARDHAN GUDURI</h2>
          <p className="text-gray-400">
             <code className="bg-gray-700 px-2 py-1 rounded-md text-pink-400 font-mono"> </code> Every Day Monday to Friday 10:00AM.
          </p>
        </div>

        <div className="mt-12 w-full">
          <h3 className="text-xl font-semibold text-gray-300 mb-6">Core Entities</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {entities.map((entity) => (
              <div
                key={entity}
                className="bg-gray-700/60 border border-gray-600 rounded-full px-5 py-2 text-sm font-medium text-gray-200 shadow-md transition-colors hover:bg-gray-600/60"
              >
                {entity}
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default App;