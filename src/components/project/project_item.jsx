import React from 'react'

const ProjectItem = ({ task, projectName, description }) => {
    return (
        <div className="col-4">
            <div className="shadow-lg rounded p-0 overflow-hidden">
                <img
                    src="https://t4.ftcdn.net/jpg/07/05/56/21/360_F_705562152_WFSrWPNw6TqrxQ3MJzWzaZ1oeH3jLtUu.jpg"
                    alt=""
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div className="p-4">
                    <p style={{ color: 'grey', fontWeight: "400", fontSize: "14px", textTransform: "capitalize" }}>{task}</p>
                    <p style={{ fontSize: "18px" }}>{projectName}</p>
                    <p style={{ color: 'grey', fontWeight: "400", fontSize: "14px" }}>{description}</p>
                    <button type="button" className="btn btn-outline-secondary p-2 mt-3" style={{ width: "150px" }}>
                        Case Study <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
