import './nav_bar.css';
export default function NavBar() {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        window.location.href = `/#${targetId}`;
    };
    return (
        <>
            <div className="w-100 m-0 bg-white">
                <div className="row justify-content-between align-items-center w-75 mx-auto py-2 px-0">
                    <div className="col-auto p-0">
                        <div className="d-flex align-items-center">
                            <h4 style={{ fontWeight: "700", fontSize: "30px" }}>Portfolio</h4>
                        </div>
                    </div>
                    <div className="col-auto p-0">
                        <ul className='navbar_top text-black'>
                            <li><a href="#home_part" onClick={(e) => handleScroll(e, 'home_part')}>Home</a></li>
                            <li><a href="#about_part" onClick={(e) => handleScroll(e, 'about_part')}>About</a></li>
                            <li><a href="#education_part" onClick={(e) => handleScroll(e, 'education_part')}>Education</a></li>
                            <li><a href="#project_part" onClick={(e) => handleScroll(e, 'project_part')}>Projects</a></li>
                            <li><a href="#skill_part" onClick={(e) => handleScroll(e, 'skill_part')}>Skills</a></li>
                            <li><a href="#contact_part" className="btn btn-secondary text-white" onClick={(e) => handleScroll(e, 'contact_part')}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}