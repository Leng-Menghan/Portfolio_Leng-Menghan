import '../style/university.css'
import CourseStructure from '../components/education/course_structure/course_structure';
import AchievementUniversity from '../components/education/achievement/achievement_university';
import { useEffect } from "react";
function UniversityPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);
    
    return (
        <div className='container w-75 mx-auto' style={{ marginBottom: "100px" }}>
            <div className="mb-5 mt-0 pt-5 d-flex flex-column align-items-center justify-content-start" style={{ height: "90vh" }}>
                <div className="d-flex align-items-center w-100">
                    <div className="d-flex bg-secondary align-items-center justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "50%" }}>
                        <img src="/assets/university.png" alt="" style={{ width: "40px", height: "40px" }} />
                    </div>
                    <h2 className='ms-3'>University</h2>
                </div>
                <hr className="hr-style" />
                <h3 style={{ fontWeight: "700", marginTop: "50px" }}>Cambodia Academic of Digital Technology </h3>
                <h4 style={{ fontSize: "23px" }}>Bachelor Degree of Computer Science </h4>
                <h4 >Specializing in Software Engineering </h4>
                <h4 >2024 - 2027 </h4>
                <div className="d-flex w-50 align-items-center mt-5">
                    <hr className="hr-style" />
                    <img src="/assets/graduation.png" alt="" style={{ width: "30px", height: "30px", margin: "0 20px" }} />
                    <hr className="hr-style" />
                </div>
                <p className='w-50 mx-auto text-center mt-3'>
                    At CADT, I built a solid foundation in software engineering,
                    focusing on problem-solving, system design, and practical application
                    through assignments, group projects, and real-world simulations.
                </p>
            </div>
            <CourseStructure />
            <AchievementUniversity />
        </div>
    )
}

export default UniversityPage