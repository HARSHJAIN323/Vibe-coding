import React from "react";

const projects = [
  {
    id: 1,
    title: "AI Virtual Mouse",
    description: "Control your computer using hand gestures and AI.",
    date: "12 Mar 2026"
  },
  {
    id: 2,
    title: "Face Detection System",
    description: "Detect and recognize faces using OpenCV and Python.",
    date: "10 Mar 2026"
  },
  {
    id: 3,
    title: "Cloud Storage Web App",
    description: "Upload and manage files securely in the cloud.",
    date: "8 Mar 2026"
  }
];

const MyProjects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 p-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            My Projects
          </h1>
          <p className="text-gray-500 mt-1">
            Manage and access your Vibe Coding projects
          </p>
        </div>

        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          + New Project
        </button>

      </div>


      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-white rounded-xl border border-gray-200 shadow-md p-6 hover:shadow-xl transition"
          >

            {/* Top Row */}
            <div className="flex justify-between items-center mb-3">

              <span className="text-sm text-gray-400">
                #{index + 1}
              </span>

              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                Vibe Coding
              </span>

            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-5">
              {project.description}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center">

              <span className="text-xs text-gray-400">
                {project.date}
              </span>

              <div className="flex gap-3">

                <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  View
                </button>

                <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition">
                  Download
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default MyProjects;