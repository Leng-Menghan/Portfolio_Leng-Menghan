import React, { useEffect } from 'react'
import '../style/home.css'
import SkillPart from '../components/skill/skill_part.jsx'
import EducationPart from '../components/education/education_part.jsx'
import ProjectPart from '../components/project/project_part.jsx';
import ContactPart from '../components/contact/contact_part.jsx';
import AboutPart from '../components/about/about_part.jsx';
import HomePart from '../components/home/home_part.jsx';
function HomePage() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.getElementById(hash.slice(1)); 
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);
    return (
        <div className='container w-75 mx-auto' style={{ marginBottom: "100px" }}>
            <HomePart />
            <AboutPart />
            <EducationPart />
            <ProjectPart />
            <SkillPart />
            <ContactPart />
        </div>
    )
}

export default HomePage
