import React from "react";

const Navbar = ({ togglePlans, toggleProjects }) => {

  const user = { name: "Harsh Patel" };

  return (
    <nav className="w-full backdrop-blur-lg bg-gradient-to-r 
                    from-blue-100 via-indigo-100 to-purple-100
                    px-10 py-3 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 font-bold shadow">
          V
        </div>

        <h1 className="text-xl font-semibold text-gray-800">
          Vibe Coding
        </h1>
      </div>

      {/* Menu */}
      <div className="flex items-center space-x-6">

        {/* Toggle Projects */}
        <button
          onClick={toggleProjects}
          className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-lg border hover:bg-white transition"
        >
          My Projects
        </button>

        {/* Toggle Plans */}
        <button
          onClick={togglePlans}
          className="px-4 py-2 bg-white/60 backdrop-blur-md rounded-lg border hover:bg-white transition"
        >
          Subscription
        </button>

        {/* User */}
        <div className="relative group">

          <div className="px-4 py-2 bg-white/60 rounded-lg border cursor-pointer">
            {user.name}
          </div>

          <div className="absolute right-0 top-full pt-3 opacity-0 invisible
                          group-hover:opacity-100 group-hover:visible transition">

            <div className="bg-white rounded-lg shadow-md w-36">

              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                My Plans
              </button>

              <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                Logout
              </button>

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;