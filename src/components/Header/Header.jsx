import React from 'react'
import './Header.css'
import headerimg from '../Images/ninja-logo.png'
// import menu from '../svg/menu.svg'




const Header = () => {
    const nav =[
        {name:'Home',link:'/'},
        {name:'About',link:'/about'},
        {name:'Contact',link:'/contact'},
        {name:'Records',link:'/records'},
        {name:'Login',link:'/login'},
    ]
  return (
    <header className='header'>
        <div id='logodiv'>
        <img className='header-logo' src={headerimg} alt="" />
         <h1>MUDASIR</h1>
            </div>
        <div className='nav'>{nav.map((item)=>{
            return <a href={item.link}>{item.name} <span></span> </a>
        })}</div>
        <div className="button"><button><span>Get Started</span></button></div>
    </header>
  )
}

export default Header