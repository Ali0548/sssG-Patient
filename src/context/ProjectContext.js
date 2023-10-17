import { createContext, useState } from "react";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(null);

  return (
    <ProjectContext.Provider value={{ projectData, setProjectData }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };
