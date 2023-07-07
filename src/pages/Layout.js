import { Outlet, Link, NavLink } from 'react-router-dom';
import React, { Suspense } from 'react';
import { ReactComponent as MenuBurger } from '../components/menu-burger.svg';
import '../CSS/Layout.css';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Layout = () => {
  const openNav = () => {
    document.getElementById('myNav').style.width = '100%';
  };

  const closeNav = () => {
    document.getElementById('myNav').style.width = '0%';
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          className='background-video'
          scene='https://prod.spline.design/00XRakUG3bUMnWNQ/scene.splinecode'
        />
      </Suspense>
      <div className='layout-wrapper' id='layout-wrapper'>
        <div className='menu-container' id='menu-container'>
          <div className='menu-div'>
            <Link to='/'>
              <p className='menu-link'>Home</p>
            </Link>
          </div>
          <div className='menu-div'>
            <Link to='/projects'>
              <p className='menu-link'>Projects</p>
            </Link>
          </div>
          <div className='menu-div'>
            <Link to='/graphics'>
              <p className='menu-link'>Graphics</p>
            </Link>
          </div>
          <div className='menu-div'>
            <Link to='/furniture'>
              <p className='menu-link'>Furniture</p>
            </Link>
          </div>
          <div className='menu-div'>
            <Link to='/3d'>
              <p className='menu-link'>3d</p>
            </Link>
          </div>
          <div className='menu-div'>
            <Link to='/motion'>
              <p className='menu-link'>Motion</p>
            </Link>
          </div>
          <div className='menu-div'>
            <Link to='/costume'>
              <p className='menu-link'>Costume</p>
            </Link>
          </div>
        </div>
        <div className='mobile-menu'>
          <div className='burger-wrapper'>
            <MenuBurger onClick={openNav} className='burger-icon' />
            <p className='menu-button'>
              &uarr; <br /> click me
            </p>
          </div>
          <div id='myNav' className='overlay'>
            {/* Button to close the overlay navigation */}
            {/* eslint-disable-next-line */}
            <NavLink to='#' className='closebtn' onClick={closeNav}>
              close
            </NavLink>
            {/* Overlay content */}
            <div className='overlay-content'>
              <div className='mobile-menu-div'>
                <Link className='mobile-menu-link' to='/'>
                  <p onClick={closeNav}>Home</p>
                </Link>
              </div>
              <div className='mobile-menu-div'>
                <Link className='mobile-menu-link' to='/projects'>
                  <p onClick={closeNav}>Projects</p>
                </Link>
              </div>
              <div className='mobile-menu-div'>
                <Link className='mobile-menu-link' to='/graphics'>
                  <p onClick={closeNav}>Graphics</p>
                </Link>
              </div>
              <div className='mobile-menu-div'>
                <Link className='mobile-menu-link' to='/furniture'>
                  <p onClick={closeNav}>Furniture</p>
                </Link>
              </div>
              <div className='mobile-menu-div'>
                <Link className='mobile-menu-link' to='/3d'>
                  <p onClick={closeNav}>3d</p>
                </Link>
              </div>
              <div className='mobile-menu-div'>
                <Link className='mobile-menu-link' to='/motion'>
                  <p onClick={closeNav}>Motion</p>
                </Link>
              </div>
              <div className='mobile-menu-div'>
                <Link className='mobile-menu-link' to='/costume'>
                  <p onClick={closeNav}>Costume</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
