// import React from 'react'
import './Header.scss'
import Nav from '../Nav/nav'
import imgLogo from '../../Assets/imgs/logo.png'
function Header(){
  
  return (
    <>
    <header className="header">
    <div className="container">
    <div className="header-bag"> 
    <img className="header-bag-img" src= {imgLogo} alt="osmondagi bololar" width={85} height={52}/>
    <Nav/>
    </div>
    </div>
    </header>
    </>
    )
  }
  
  
  
  export default Header