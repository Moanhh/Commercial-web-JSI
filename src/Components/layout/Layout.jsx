import React from 'react'

import Header from '../header/Header';
import Router from '../../routers/Router';
import Footer from '../footer/Footer';


function Layout() {
  return (
    <>
        <Header/>
        <div>
            <Router/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout