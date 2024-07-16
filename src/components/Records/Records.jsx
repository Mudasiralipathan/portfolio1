import React from 'react'
import './Records.css'
import awardimg from '../Images/award2.png'

const Records = () => {
  let record=[
    {
      id:1,
      class: "7th",
      subject: "Maths",
      marks: "100",
      img :{awardimg}
    },
      
      {
        id:2,
        class: "8th",
        subject: "English",
        marks: "100",
        img :{awardimg}
      },
        
        
        {
          id:3,
          class: "9th",
          subject: "Science",
          marks: "100",
          img :{awardimg}
        },
          
          {
            id:4,
            class: "10th",
            subject: "Hindi",
            marks: "100",
            img :{awardimg}
          },
            {
              id:5,
              class: "10th",
              subject: "Maths",
              marks: "100",
              img :{awardimg}
            },
              {
                id:6,
                class: "10th",
                subject: "English",
                marks: "100",
                img :{awardimg}
              },
                {
                  id:7,
                  class: "10th",
                  subject: "Science",
                  marks: "100",
                  img :"src/assets/logo/award2.png"
                },
                  {
                    id:8,
                    class: "10th",
                    subject: "Hindi",
                    marks: "100",
                    img :{awardimg}
                  },
  ]
  

  return (
   
    <div className='records'>
        {/* <div className="space">
          <div></div> 
        </div> */}
      <section> 
        <div className="Recordsheading"><h1>Records</h1></div>
         <div className="slider">
          <div className="slides">
              {record.map((item,idx)=>(
                <div className="card" key={idx} >
                  <div><img src={awardimg} alt="" /></div>
                    <div>
                      <h3>CLASS :{item.class}</h3>
                      <h4>SUBJECT :{item.subject}</h4>
                      <h4>MARKS :{item.marks}</h4>
                    </div>
                </div>
                
              ))}
          </div>
         </div>
      </section>
      {/* <div className="space1">
        <div></div>
      </div> */}
    </div>
  )
}

export default Records