import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import './education_part.css'

const EducationPart = () => {
    return (
        <div className="container my-5 d-flex flex-column align-items-center justify-content-center vh-100" id="education_part">
            <h1 className="mb-5">EDUCATION</h1>
            <VerticalTimeline lineColor="grey" style={{ padding: "0" }}>
                <VerticalTimelineElement
                    iconStyle={{ background: "grey", width: "20px", height: "20px", marginLeft: "-10px", boxShadow: "none" }}
                    contentStyle={{ boxShadow: "none", border: "none" }}
                    contentArrowStyle={{ borderRight: "0px" }}
                    style={{ margin: "10px 0"}}
                >
                    <p className='m-0'> </p>
                    <p className='m-0'></p>
                    <p className='m-0'></p>
                    <p className='m-0'></p>

                    <div className='d-flex align-items-center'>
                        <i className="fa-solid fa-chalkboard-user" style={{ width: "20px" }}></i>
                        <p className='p-0 m-0' style={{ fontSize: "20px", fontWeight: "600" }}>University</p>
                        <p className='p-0 m-0 ms-2' style={{ fontSize: "18px" }}>2024 - Present</p>
                    </div>
                    <p className='d-flex align-items-center m-0 text-secondary'>
                        <i className="fa-solid fa-school" style={{ width: "20px" }}></i>
                        Cambodia Academic of Digital Technology
                    </p>
                    <p className='m-0 d-flex align-items-center text-secondary'>
                        <i class="fa-solid fa-graduation-cap" style={{ width: "20px" }}></i>
                        Bachelor Degree of Computer Science
                    </p>
                    <p className='m-0 d-flex align-items-center text-secondary'>
                        <i class="fa-solid fa-book-bookmark" style={{ width: "20px" }}></i>
                        Software Engineering
                    </p>
                    <p className='m-0 d-flex align-items-center text-secondary'>
                        <i className="fa-solid fa-location-dot" style={{ width: "20px" }}></i>
                        PhnomPenh, Cambodia
                    </p>
                    <Link to ="/university" style={{ textDecoration: "None" }} className='d-flex align-items-center mt-2'>
                        <p className="m-0">View more</p>
                        <i class="fa-solid fa-circle-chevron-right"></i>
                    </Link>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: "grey", width: "20px", height: "20px", marginLeft: "-10px", boxShadow: "none" }}
                    contentStyle={{ boxShadow: "none", border: "none" }}
                    contentArrowStyle={{ borderRight: "0px" }}
                    style={{ margin: "10px 0"}}
                >
                    <div className='d-flex align-items-center'>
                        <i className="fa-solid fa-chalkboard-user" style={{ width: "20px" }}></i>
                        <p className='p-0 m-0' style={{ fontSize: "20px", fontWeight: "600" }}>High School</p>
                        <p className='p-0 m-0 ms-2' style={{ fontSize: "18px" }}>2018 - 2023</p>
                    </div>
                    <p className='d-flex align-items-center m-0 text-secondary'>
                        <i className="fa-solid fa-school" style={{ width: "20px" }}></i>
                        Bun Rany Hun Sen PrekTadoung High School
                    </p>
                    <p className='m-0 d-flex align-items-center text-secondary'>
                        <i className="fa-solid fa-location-dot" style={{ width: "20px" }}></i>
                        Kandal, Cambodia
                    </p>
                    <Link to ="/highschool" style={{ textDecoration: "None" }} className='d-flex align-items-center mt-2'>
                        <p className="m-0">View more</p>
                        <i class="fa-solid fa-circle-chevron-right"></i>
                    </Link>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: "grey", width: "20px", height: "20px", marginLeft: "-10px", boxShadow: "none" }}
                    contentStyle={{ boxShadow: "none", border: "none" }}
                    contentArrowStyle={{ borderRight: "0px" }}
                    style={{ margin: "10px 0" }}
                >
                    <div className='d-flex align-items-center'>
                        <i className="fa-solid fa-chalkboard-user" style={{ width: "20px" }}></i>
                        <p className='p-0 m-0' style={{ fontSize: "20px", fontWeight: "600" }}>Primary School</p>
                        <p className='p-0 m-0 ms-2' style={{ fontSize: "18px" }}>2011 - 2017</p>
                    </div>
                    <p className='d-flex align-items-center m-0 text-secondary'>
                        <i className="fa-solid fa-school" style={{ width: "20px" }}></i>
                        Prek Samroung Primary School
                    </p>
                    <p className='m-0 d-flex align-items-center text-secondary'>
                        <i className="fa-solid fa-location-dot" style={{ width: "20px" }}></i>
                        Kandal, Cambodia
                    </p>
                    <Link to ="/primaryschool" style={{ textDecoration: "None" }} className='d-flex align-items-center mt-2'>
                        <p className="m-0">View more</p>
                        <i class="fa-solid fa-circle-chevron-right"></i>
                    </Link>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default EducationPart;