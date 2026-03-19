import '../style/university.css'
import React, { useState, useEffect } from "react";
function PrimaryschoolPage() {
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
                        <img src="/assets/primaryschool.png" alt="" style={{ width: "45px", height: "45px" }} />
                    </div>
                    <h2 className='ms-3'>Primary School</h2>
                </div>
                <hr className="hr-style" />
                <h3 style={{ fontWeight: "700", marginTop: "50px" }}>Prek Samroung Primary School</h3>
                {/* <h4 style={{ fontSize: "23px" }}>Bachelor Degree of Computer Science </h4>
                <h4 >Specializing in Software Engineering </h4> */}
                <h4 >2011 - 2017 </h4>
                <div className="d-flex w-50 align-items-center mt-5">
                    <hr className="hr-style" />
                    <img src="/assets/primary_sign.png" alt="" style={{ width: "30px", height: "30px", margin: "0 20px" }} />
                    <hr className="hr-style" />
                </div>
                <p className='w-50 mx-auto text-center mt-3'>
                    At Prek Samroung Primary School, I built a strong foundation in core subjects
                    such as Khmer, Math, and Science, while developing discipline, curiosity,
                    and good study habits. These early academic experiences prepared me for
                    success in secondary school.
                </p>
            </div>
        </div>
    )
}

export default PrimaryschoolPage