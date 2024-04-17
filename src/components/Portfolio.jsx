import { useState } from "react"
import { projectsData } from "../utils/data"
import Projects from "./Projects"


const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);
  const [activeFilter, setActiveFilter] = useState(null);

  const filterWebProjects = () =>{
    const filteredWeb = projectsData.filter(
      (d)=> d.domain === 'web'
    )
    setProjects(filteredWeb);
    setActiveFilter('web');
  }
  
  const filterJavaProjects = () =>{
    const filteredJava = projectsData.filter(
      (d)=>d.domain === 'java'
    )
    setProjects(filteredJava);
    setActiveFilter('java');
  }

  const def = () =>{
    setProjects(projectsData);
    setActiveFilter(null);
  }

  return (
    <div id="projects" className="pt-9  h-full w-4/5 flex items-center flex-col">
        <h2 className='text-center font-bold text-3xl font-mono'>Projects</h2>
        <p className="text-center text-red-600 mt-1">Thing that I’ve Built</p>
        <div id="filter" className="">
          <button className={`px-3 py-1 font-semibold border border-black mx-3 mt-6  ${activeFilter === null? 'bg-black text-white': 'hover:bg-black hover:text-white'}`} onClick={def}>All</button>
          <button className={`px-3 py-1 hover:bg-black hover:text-white font-semibold border border-black mx-3 mt-6 ${activeFilter==='web'?'bg-black text-white':'hover:bg-black hover:text-white'}`} onClick={filterWebProjects}>Web</button>
          <button className={`px-3 py-1 hover:bg-black hover:text-white font-semibold border border-black mx-3 mt-6 ${activeFilter==='java'?'bg-black text-white':'hover:bg-black hover:text-white'} `} onClick={filterJavaProjects}>Java</button>
        </div>
        <div className="flex flex-wrap gap-8  justify-center mt-7 w-full">
          {
            projects.map(
              (project)=>(
                  <Projects key={project.id} head={project.head} cont={project.cont} host={project.isHosted} stack={project.stack} gitHub={project.gitlink} link={project.link}/>
              )
            )
          }
        </div>
    </div>
  )
}

export default Portfolio