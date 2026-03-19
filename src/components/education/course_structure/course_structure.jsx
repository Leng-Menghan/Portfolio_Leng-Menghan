import React, { useState } from "react";
import courses from '../../../data/course_data.jsx';
import CourseItem from "./course_item";
function CourseStructure() {
    const [activeYear, setActiveYear] = useState(0);
    const handleClick = (year) => {
        setActiveYear(year);
    };
    return (
        <div className="d-flex flex-column vh-100 justify-content-start align-items-center">
            <h1 className="mb-5">Couse Structure</h1>
            <div className="row w-100">
                {courses.map((year, index) => (
                    <div className="col-4">
                        <button
                            className={`btn ${activeYear === index ? "btn-secondary" : "btn-outline-secondary"} w-100`}
                            onClick={() => handleClick(index)}
                        >
                            {year.year}
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-4 w-100">
                <div className="row">
                    {courses[activeYear].terms.map((term, index) => (
                        <CourseItem item={term} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseStructure