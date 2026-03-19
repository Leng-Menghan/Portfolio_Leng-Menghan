import '../style/university.css'
import { achievementsHighschool } from '../data/achievement-data.jsx'
import React, { useState, useEffect } from "react";
import AchievementHighschool from '../components/education/achievement/achievement_highschool.jsx';
function HighschoolPage() {
    const [filter, setFileter] = useState(0);

    const handleClick = (type) => {
        setFileter(type);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);
    return (
        <div className='container w-75 mx-auto' style={{ marginBottom: "100px" }}>
            <div className="mb-5 mt-0 pt-5 d-flex flex-column align-items-center justify-content-start" style={{ height: "90vh" }}>
                <div className="d-flex align-items-center w-100">
                    <div className="d-flex bg-secondary align-items-center justify-content-center" style={{ width: "80px", height: "80px", borderRadius: "50%" }}>
                        <img src="/assets/highschool.png" alt="" style={{ width: "45px", height: "45px" }} />
                    </div>
                    <h2 className='ms-3'>High School</h2>
                </div>
                <hr className="hr-style" />
                <h3 style={{ fontWeight: "700", marginTop: "50px" }}>Bun Rany Hun Sen PrekTadoung High School</h3>
                {/* <h4 style={{ fontSize: "23px" }}>Bachelor Degree of Computer Science </h4>
                <h4 >Specializing in Software Engineering </h4> */}
                <h4 >2018 - 2023 </h4>
                <div className="d-flex w-50 align-items-center mt-5">
                    <hr className="hr-style" />
                    <img src="/assets/highschool_sign.png" alt="" style={{ width: "30px", height: "30px", margin: "0 20px" }} />
                    <hr className="hr-style" />
                </div>
                <p className='w-50 mx-auto text-center mt-3'>
                    At Bun Rany Hun Sen PrekTadoung High School, I developed a solid
                    academic foundation and strong study habits, along with critical
                    thinking and discipline. My dedication to learning helped prepare me for
                    higher education and academic success.
                </p>
            </div>
            <AchievementHighschool/>
        </div>
    )
}

export default HighschoolPage