import { useState } from 'react'
import './footer.css';
export default function Footer(){
    return(
        <>
            <div className="row bg-secondary w-100 m-0 px-5 py-3 text-white">
                <div className="align-items-center d-flex flex-column w-75 mx-auto py-2 px-0">
                    <h4 className='mb-3' style={{fontWeight: "700", fontSize: "30px"}}>Leng Menghan</h4>
                    <h5>
                        Web Developer | IT Student          
                        Phnom Penh, Cambodia 
                    </h5>
                    <div className="mb-3"></div>
                    <h6>QUICK LINKS</h6>
                    <div className="ul">
                        <ul className='navbar mb-3'>
                            <li>
                                <a href="#home_part">Home</a>
                            </li>
                            <li>
                                <a href="#about_part">About</a>
                            </li>
                            <li>
                                <a href="#education_part">Education</a>
                            </li>
                            <li>
                                <a href="#project_part">Projects</a>
                            </li>
                            <li>
                                <a href="#skill_part">Skills</a>
                            </li>
                            <li>
                                <a href="#contact_part">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex p-0 mb-3 gap-2" >
                        <a href="https://www.facebook.com/share/1G2KqfJ5yv/">
                            <i className="fa-brands fa-facebook" style={{fontSize: "20px"}}></i>
                        </a>
                        <a href="https://t.me/Leng_MengHAN">
                            <i className="fa-brands fa-telegram" style={{fontSize: "20px"}}></i>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=han230666@gmail.com">
                            <i className="fa-solid fa-envelope" style={{fontSize: "20px"}}></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-github" style={{fontSize: "20px"}}></i>
                        </a>
                    </div>

                    <p>© 2026 Leng Menghan. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}