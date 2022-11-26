import React from 'react';
import './Header.css';
import {Container, Row} from 'reactstrap';

import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom';

import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';


function Header() {

  const nav_links =[
    {
      path: 'home',
      display: 'Home',
    },
    {
      path: 'shop',
      display: 'Shop',
    },
    {
      path: 'cart',
      display: 'Cart',
    },
]

  return (
    <div className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="" />
              
                <h1>Multimart</h1>
              {/* <div>
                <p>Since 1995</p>
              </div> */}
            </div>
            <div className="navigation">
              <ul className="menu">
                {
                nav_links.map((item, index) => (
                  <li className='nav_item' key = {index}> 
                    <NavLink to={item.path} className={(navClass) => 
                      navClass.isActive ? 'nav_active' : ''}>{item.display}</NavLink>
                  </li>
                ))
                }
              </ul>
            </div>
          <div className="nav_icons">
          <span className="cart_icon">
              <i class="ri-heart-line"></i>
              <span className="badge">1</span>
            </span>
            <span className="fav_icon">
              <i class="ri-heart-line"></i>
              <span className="badge">1</span>
            </span>
            <span>
              <motion.img whileTap={{scale:1.2}} src={userIcon} alt="" />
            </span>
          </div>
          <div className="mobile_menu">
            <span> </span>
          </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Header