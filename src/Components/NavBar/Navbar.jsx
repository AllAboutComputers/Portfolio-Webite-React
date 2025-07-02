import React, { useState, useEffect, useRef } from 'react'
import './NavBar.css'
import logo from '../../assets/LogoFinalPortfolio-removebg-preview.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const menuRef= useRef();
  
  const openMenu =() => {
    menuRef.current.style.right="0";
  }

  const closeMenu =() => {
    menuRef.current.style.right="-350px";
  }

  
  const [menu, setMenu] = useState("home")
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowNavbar(currentScrollY < lastScrollY)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Highlight underline based on scroll position
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'work', 'contact']

    const handleScroll = () => {
      const scrollY = window.scrollY
      let current = 'home'

      for (let id of sections) {
        const section = document.getElementById(id)
        if (section) {
          const offsetTop = section.offsetTop
          const height = section.offsetHeight
          if (scrollY >= offsetTop - 150 && scrollY < offsetTop + height - 150) {
            current = id === 'work' ? 'portfolio' : id
          }
        }
      }

      setMenu(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p onClick={() => {setMenu("home"); closeMenu()}}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => {setMenu("about"); closeMenu()}}>About</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#projects'>
            <p onClick={() => {setMenu("projects");closeMenu() }}>Projects</p>
          </AnchorLink>
          {menu === "projects" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => {setMenu("portfolio"); closeMenu()}}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => {setMenu("contact"); closeMenu()}}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
