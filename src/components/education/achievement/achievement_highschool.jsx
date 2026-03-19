import React, { useState } from "react";
import { achievementsHighschool } from "../../../data/achievement-data";
function AchievementHighschool() {
    const [filter, setFileter] = useState(0);

    const handleClick = (type) => {
        setFileter(type);
    };
    return (
        <div className="d-flex flex-column justify-content-start align-items-center">
            <h1 className="mb-4">Achievement</h1>
            <div className="d-flex w-100">
                {
                    achievementsHighschool.map((type, index) => (
                        <button
                            className={`btn ${filter === index ? "btn-secondary" : "btn-outline-secondary"} w-100 me-2`}
                            onClick={() => handleClick(index)}
                        >
                            {type.type}
                        </button>
                    ))
                }
            </div>
            <div className="mt-4 w-100" >
                {
                    filter == 2 && (
                        <div className="shadow-lg rounded p-3 py-4 h-100">
                            <div className="d-flex flex-column">
                                {
                                    achievementsHighschool[filter].achs.map((achievement, index) => (
                                        <div>
                                            <strong className='fs-5'>{achievement.type}</strong><br />
                                            {achievement.description}
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <img className='mt-3' src={achievement.image} alt="" style={{ width: "80%" }} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
                {
                    filter == 1 && (
                        <div className="shadow-lg rounded p-3 py-4 h-100">
                            {
                                achievementsHighschool[filter].achs.map((achievement, index) => (
                                    <>
                                        <div className="text-center">
                                            {achievement.description}
                                        </div>
                                        <img className='mt-3' src={achievement.image} alt="" style={{ width: "100%" }} />
                                    </>
                                ))
                            }
                        </div>
                    )
                }

                {
                    filter == 0 && (
                        <div className="shadow-lg rounded p-3 h-100">
                            <div class="accordion" id="accordionExample">
                                {
                                    achievementsHighschool[filter].achs.map((achievement, index) => {
                                        const identify = `grade${index}`;
                                        return <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${identify}`} aria-expanded="false" aria-controls={identify}>
                                                    <strong>{achievement.grade}</strong>
                                                </button>
                                            </h2>
                                            <div id={identify} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                <div className="accordion-body d-flex flex-column">
                                                    {
                                                        achievement.types.map((type, index) => (
                                                            <div className='mb-5'>
                                                                <strong className='fs-5'>{type.type}</strong><br />
                                                                {type.description}
                                                                <img className='mt-3' src={type.image} alt="" style={{ width: "100%" }} />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AchievementHighschool