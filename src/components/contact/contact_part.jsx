import React from 'react'
import ContactItem from './contact_item.jsx'
import contacts from '../../data/contact_data.jsx'
const ContactPart = () => {
    return (
        <div className='w-100 m-0 mt-5 d-flex flex-column align-items-center justify-content-center vh-100' id='contact_part'>
            <h1 className='mb-5'>
                CONTACT ME
            </h1>
            <div className="row w-100 shadow-lg p-5" style={{ height: "600px", borderRadius: "20px" }}>
                <div className="col-5 h-100 d-flex flex-column justify-content-center align-items-start">
                    <h3 className='mb-3' style={{ fontSize: "38px" }}>Get in Touch</h3>
                    {contacts.map((contact) => (
                        <ContactItem name={contact.name} information={contact.information} icon={contact.icon} />
                    ))}
                </div>
                <div className="col-1"></div>
                <div className="col-6 d-flex flex-column justify-content-center">
                    <h3 style={{ fontSize: "38px" }}>
                        Send message to me
                    </h3>
                    <div className="mb-3"></div>
                    <div class="mb-3">
                        <label class="form-label">Your name or Company</label>
                        <input type="text" class="form-control" placeholder='Enter your name or company' />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Your contact information</label>
                        <input type="text" class="form-control" placeholder='Enter your phone number or email' />
                    </div>
                    <div class="mb-3 d-flex flex-column flex-grow-1">
                        <label class="form-label">Message</label>
                        <textarea className="form-control flex-grow-1" placeholder="Write your message here"> </textarea>
                    </div>
                    <div className="mb-3"></div>
                    <button type="button" className="btn btn-secondary p-2">
                        Send message<i class="fa-solid fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactPart
