import React from 'react'
import { Routes, Route, Link  } from "react-router-dom";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import PrimaryButton from '../childrens/mixins/PrimaryButton';

import Line from '../childrens/mixins/Line'
import Switcher from '../childrens/mixins/Switcher'
import Logo from '../../media/logo.jpg'

const Header = () => {


  return (
    <React.Fragment>
      <header className='header py-[1.875rem] flex container'>
          <div className='logo'>
            <Link  to="/"><img src={Logo} alt='' /></Link>             
          </div>
          <div className='nav flex gap-[4.597rem] ml-auto'>
              <ul className='hidden md:flex justify-center items-center gap-[3.597rem]  w-fit'>
                  <li><Link className="link" to="/">home</Link></li>
                  <li><Link className="link" to="/portfolio">portfolio</Link></li>
                  <li><Link className="link" to="/work">work</Link></li>
                  <li><Link className="link" to="/contact">contact  </Link></li>
                  <li> <PrimaryButton text="resume" styleName='primary-button' link={process.env.RESUME} /></li>
              </ul>              
              <div className='switcher flex justify-center items-center'>
                <Switcher/>
             </div>
          </div>          
      </header>
      <Line/>
     <Routes basename="/Porfolio-v3">
        <Route path="/"  element={<Home />} /> 
        <Route path="/contact" element={<Contact />} />
    </Routes>
          
    </React.Fragment>
  )
}

export default Header