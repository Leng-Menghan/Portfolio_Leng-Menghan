import React from 'react'
import profile from "/assets/profile.png";
const HomePart = () => {
    return (
        // <div className="container mb-5 mt-4 m-0 d-flex flex-column align-items-center justify-content-center vh-100">
        <div className="m-0 mb-5 d-flex align-items-center justify-content-center" style={{ height: "90vh" }} id='home_part'>
            <div className="row align-items-center">
                <div className="col-6 h-100 d-flex flex-column justify-content-between">
                    <h1 style={{ fontSize: "70px", fontWeight: "600" }}>
                        Hello, I’m <br /> Leng Menghan
                    </h1>
                    <div className="mb-3"></div>
                    <p>
                        I am a student at the Cambodia Academy of Digital Technology (CADT), pursuing a Bachelor’s Degree in Computer Science, specializing in Software Engineering.
                    </p>
                    <div className="mb-3"></div>
                    <button type="button" className="btn btn-secondary" style={{ width: "120px" }}>
                        Say Hello
                    </button>
                    <div className="row mt-5 gx-3 gy-3 w-75">
                        <div className="col-4 ">
                            <div className="d-flexflex-column justify-content-center align-items-between p-2 text-center rounded-4 border border-secondary">
                                <p style={{fontSize: "20px", fontWeight: "700"}}>3rd</p>
                                <p >Year Student</p>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div className="d-flexflex-column justify-content-center align-items-between p-2 text-center rounded-4 border border-secondary">
                                <p style={{fontSize: "20px", fontWeight: "700"}}>6+</p>
                                <p >Projects</p>
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div className="d-flexflex-column justify-content-center align-items-between p-2 text-center rounded-4 border border-secondary">
                                <p style={{fontSize: "20px", fontWeight: "700"}}>3.83</p>
                                <p >GPA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center">
                    <img
                        src={profile}
                        alt=""
                        style={{ width: "400px", height: "500px", borderRadius: "20px", objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePart
