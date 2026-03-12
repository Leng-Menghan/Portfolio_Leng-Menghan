import React from 'react'

const SkillItem = ({ title, image }) => {
    return (
        <div
            className="m-3 rounded-4 d-flex flex-column align-items-center justify-content-between p-3"
            style={{ width: "130px", height: "150px", backgroundColor: "gainsboro" }}
        >
            <img src={image} alt={title} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
            <h4>{title}</h4>
        </div>
    )
}

export default SkillItem
