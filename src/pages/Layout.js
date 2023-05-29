import { Outlet, Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import '../CSS/Layout.css';

const Layout = () => {
  return (
    <div className='layout-wrapper'>
      <Outlet />
      <div className='menu-container'>
        <div className='menu-div'>
          {/* HOME */}
          <Link to='/'>
            <Spline scene='https://prod.spline.design/9KI7hMM3DG96BFeI/scene.splinecode' />
          </Link>
        </div>
        <div className='menu-div'>
          {/* FURNITURE */}
          <Link to='/furniture'>
            <Spline scene='https://prod.spline.design/vkRJKuCH0ID4gAGo/scene.splinecode' />
          </Link>
        </div>
        <div className='menu-div'>
          {/* 3D */}
          <Link to='/3d'>
            <Spline scene='https://prod.spline.design/yVpasTp8yPJR9SZG/scene.splinecode' />
          </Link>
        </div>
        <div className='menu-div'>
          {/* MOTION */}
          <Link to='/motion'>
            <Spline scene='https://prod.spline.design/1-pDO-C8Xlz8QtBt/scene.splinecode' />
          </Link>
        </div>
        <div className='menu-div'>
          {/* COSTUME */}
          <Link to='/costume'>
            <Spline scene='https://prod.spline.design/Bl2JbhbaVpk28zmd/scene.splinecode' />
          </Link>
        </div>
        <div className='menu-div'>
          {/* PROJECTS */}
          <Link to='/projects'>
            <Spline scene='https://prod.spline.design/f2-jwTy6jxoRJQVZ/scene.splinecode' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
