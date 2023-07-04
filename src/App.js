import React /* , { Suspense } */ from 'react';
import { browserName, browserVersion } from 'react-device-detect';
import './App.css';

/* const Spline = React.lazy(() => import('@splinetool/react-spline')); */

console.log(`${browserName} ${browserVersion}`);

const App = () => {
  return (
    <>
      <div className='right-half'>
        <div className='title-contact-wrapper'>
          <div className='title-div'>
            <h1 className='title-name'>
              Hi, <span className='bold-span'>I'm Cody.</span>
            </h1>
          </div>
          <div className='title-div'>
            <h1>
              I'm a <span className='designer-bold-span'>designer</span>
            </h1>
            <h1>
              +<span className='webdev-bold-span'>web developer.</span>
            </h1>
          </div>
          <div className='contact-div'>
            <div className='email-me'>
              <p>
                <strong>email me &darr;</strong>
              </p>
              <a className='contact-a' href='mailto:derbyshire@outlook.com'>
                derbyshire@outlook.com
              </a>
            </div>
            <div className='call-me'>
              <strong>
                <p>call me &darr;</p>
              </strong>
              <a className='contact-a' href='tel:+64220725530'>
                +64220725530
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
