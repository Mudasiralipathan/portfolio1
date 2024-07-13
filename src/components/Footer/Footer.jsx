import React from 'react'
import './Footer.css'
import Project from '../Project/Project'

const Footer = () => {
    const footdata =[
        {name:'Home',link:'/'},
        {name:'About',link:'/about'},
        {name:'Records',link:'/records'},
    ]
const Projectlinks =[
    {Project:"Project1",link:"/project1"},
    {Project:"Project2",link:"/project2"},
    {Project:"Project3",link:"/project3"},
]
  return (
    <footer>
        <div className="logo_div">
        <img className='header-logo' src="public/logo/ninja-logo.png" alt="" />
        <h1>MUDASIR</h1>
        </div>
        <div className="page_div">
        <div className='foot'>{footdata.map((item)=>{
            return <a href={item.link}>{item.name} <span></span> </a>
        })}</div>
        </div>
        <div className="project__div">
            <div className='projectfooter'>{Projectlinks.map((project1)=>{
                return <a href= { project1.link }>{project1.Project}  </a>
            })}</div>
        </div>
    </footer>
  )
}

export default Footer