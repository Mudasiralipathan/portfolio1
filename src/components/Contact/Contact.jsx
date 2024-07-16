import React from 'react'
import './Contact.css'
import whatsapp from '../Images/WHATSAPP.jpg'
import location from '../Images/map.png'
import email from '../Images/mail.png'
import fb from '../Images/facebook.png'
import ld from '../Images/linkedIn.png'
import ig from '../Images/instagram.png'




const Contact = () => {
 const contact = [
   {
     id: 1,
     name: "Email",
     email: "x5n5E@example.com",
     img : email
   },
   {
     id: 2,
     name: "Location",
     email: "karachi/pakistan",
     img : location
   },
   {
     id: 3,
     name: "Whatsapp",
     email: "+92 300 000 0000",
     img : whatsapp
    },
    {
      id: 4,
      name: "Facebook",
      email: "+92 300 000 0000",
      img : fb
     },
     {
      id: 5,
      name: "Linkedin",
      email: "+92 300 000 0000",
      img : ld
     },
     {
      id: 6,
      name: "Instagram",
      email: "+92 300 000 0000",
      img : ig
     },
     
 ]
  return (
    <div className="contact">
      {/* <div className="space2">
        <div></div>
      </div> */}
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