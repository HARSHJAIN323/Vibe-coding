import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import MyProjects from "./components/MyProjects";

function App() {

  const [showPlans, setShowPlans] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const togglePlans = () => {
    setShowPlans(!showPlans);
    setShowProjects(false);
  };

  const toggleProjects = () => {
    setShowProjects(!showProjects);
    setShowPlans(false);
  };

  return (
    <div>

      <Navbar
        togglePlans={togglePlans}
        toggleProjects={toggleProjects}
      />

      {showPlans && <Plans />}

      {showProjects && <MyProjects />}

    </div>
  );
}

export default App;