import React from 'react'
import './Contact.css'
import whatsapp from '../Images/WHATSAPP.jpg'
import location from '../Images/LOCATION.png'
import email from '../Images/EMAIL.png'



const Contact = () => {
 const contact = [
   {
     id: 1,
     name: "Email",
     email: "x5n5E@example.com",
     img :{email}
   },
   {
     id: 2,
     name: "Location",
     email: "karachi/pakistan",
     img :{location}
   },
   {
     id: 3,
     name: "Whatsapp",
     email: "+92 300 000 0000",
     img :{whatsapp}}
 ]
  return (
    <div className="contact">
      <div className="space2">
        <div></div>
      </div>
      <div className='contact-heading'><h1>Contact</h1></div>
      <div className='contact-container'>
        {contact.map((item) => {
          return (
            <div className="contact-card" key={item.id}>
              <div><img src={item.img} alt="" /></div>
              <div>
              <h3>{item.name}</h3>
              <p>{item.email}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact