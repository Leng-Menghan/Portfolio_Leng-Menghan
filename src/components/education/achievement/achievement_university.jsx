import React, { useState } from "react";
import {achievementsUniversity} from "../../../data/achievement-data";
function AchievementUniversity() {
    const [filter, setFileter] = useState(0);

    const handleClick = (type) => {
        setFileter(type);
    };
    return (
        <div className="d-flex flex-column justify-content-start align-items-center">
            <h1 className="mb-4">Achievement</h1>
            <div className="d-flex w-100">
                {
                    achievementsUniversity.map((type, index) => (
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
                    filter == 0 ? (
                        <div className="shadow-lg rounded p-3 h-100">
                            <div class="accordion" id="accordionExample">
                                {
                                    achievementsUniversity[filter].achs.map((achievement, index) => {
                                        const identify = `scholarship${index}`;
                                        return (
                                            <div class="accordion-item">
                                                <h2 class="accordion-header">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${identify}`} aria-expanded="false" aria-controls={identify}>
                                                        <strong>{achievement.university}</strong>
                                                    </button>
                                                </h2>
                                                <div id={identify} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        {achievement.description}
                                                        <img className='mt-3' src={achievement.image} alt="" style={{ width: "100%" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ) : (
                        <div className="row gy-4">
                            {
                                achievementsUniversity[filter].achs.map((certificate, index) => (
                                    <div className="col-6">
                                        <div className="shadow-lg rounded p-3 h-100">
                                            <img src={certificate} alt="" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default AchievementUniversity