import React from 'react'

const ContactItem = ({name, icon, information}) => {
    return (
        <div className="d-flex align-items-center shadow-lg p-3 rounded my-2 w-100">
            <div className="me-3 bg-secondary d-flex justify-content-center align-items-center rounded" style={{ width: "40px", height: "40px" }}>
                <i className={`${icon} text-white fs-5`}></i>
            </div>
            <div className='d-flex flex-column'>
                <p className='text-secondary'>{name}:</p>
                <a href={`${name == "Email" ? "https://mail.google.com/mail/?view=cm&fs=1&to=" : ""}${information}`} target='_blank' style={{textDecoration: "None"}}>
                    <p className='text-black'>{information}</p>
                </a>
            </div>
        </div>
    )
}

export default ContactItem