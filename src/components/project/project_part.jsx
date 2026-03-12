import React, { useState } from 'react'
import projects from '../../data/project_data.jsx'
import ProjectItem from './project_item.jsx'
const ProjectPart = () => {
    const [showAll, setShowAll] = useState(false);
    const display = showAll ? projects : projects.slice(0, 3);
    const viewHeight = !showAll && "vh-100" 

    return (
        <div className={`container d-flex flex-column align-items-center justify-content-center my-5 ${viewHeight}`} id='project_part'>
            <h1 className='mb-5'>
                PROJECT OVERVIEW
            </h1>
            <div className="row gx-4 gy-4">
                {display.map((project) => (
                    <ProjectItem projectName={project.projectName} task={project.task} description={project.description} />
                ))}
            </div>
            <button type="button" onClick={() => setShowAll(!showAll)} className="btn btn-secondary p-2" style={{ width: "120px", marginTop: "50px" }}>
                {showAll ? "Show less" : "More project"}
            </button>
        </div>
    )
}

export default ProjectPart
