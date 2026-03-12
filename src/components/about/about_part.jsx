import React from 'react'
import profile from "/assets/profile.png";
const AboutPart = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center vh-100 my-5' id='about_part'>
            <h1 className="mb-5">ABOUT ME</h1>
            <div className="row container shadow-lg w-60 p-5" style={{ height: "500px", borderRadius: "20px" }}>
                <div className="col-4 h-100">
                    <img
                        src={profile}
                        alt=""
                        style={{ width: "100%", height: "100%", borderRadius: "20px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-1"></div>
                <div className="col-7 d-flex flex-column justify-content-center">
                    <h3 style={{ fontSize: "38px" }}>
                        I am a Software <br />Engineering student
                    </h3>
                    <div className="mb-3"></div>
                    <p>
                        I am a punctual, disciplined, and detail-oriented IT student with a strong passion for technology 
                        and problem-solving. I take pride in staying organized, meeting deadlines, and delivering high-quality 
                        results. I enjoy learning new skills, exploring innovative solutions, and continuously improving. 
                        I work well both independently and in a team, communicate clearly, 
                        and adapt quickly to new challenges.
                    </p>
                    {/* <div className="mb-3"></div>
                    <p>
                        I design and develop services for customers specializing
                        creating stylish, modern websites, web services.
                    </p> */}
                    <div className="mb-4"></div>
                    <div className="col-auto ps-0">
                        <a href="/assets/Leng_Menghan_CV.pdf" download className="btn btn-secondary p-2" style={{ width: "170px" }}>
                            <i class="fa-solid fa-download"></i> Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPart;
