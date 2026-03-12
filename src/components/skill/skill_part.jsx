import React, { useState } from 'react'
import SkillItem from './skill_item.jsx'
import { skillButtons, skillCategories } from '../../data/skill_data.jsx'
const SkillPart = () => {
    const [skillCategoryIndex, setSkillCategoryIndex] = useState(0)

    return (
        <div className="container my-5 d-flex flex-column align-items-center justify-content-center vh-100" id='skill_part'>
            <h1 className='mb-5'>
                SKILLS PREVIEW
            </h1>
            <div className="d-flex justify-content-center">
                {skillButtons.map((button, index) => (
                    <button
                        key={index}
                        onClick={() => setSkillCategoryIndex(index)}
                        type="button"
                        className={`btn ${index == skillCategoryIndex ? "btn-secondary" : "btn-outline-secondary"} p-2 mx-2`} style={{ width: "150px" }}
                    >
                        {button}
                    </button>
                ))}
            </div>
            <div className="d-flex flex-wrap justify-content-center mt-3">
                {skillCategories[skillCategoryIndex].skills.map((skill, index) => (
                    <SkillItem key={index} title={skill.name} image={skill.image} />
                ))}
            </div>
        </div>
    )
}

export default SkillPart
