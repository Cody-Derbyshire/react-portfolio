import { useRef } from 'react';
import './App.css';

import Spline from '@splinetool/react-spline';

const App = () => {
  const text = useRef();

  const onLoad = (spline) => {
    console.log(spline.findObjectByName('Text'));
    console.log(spline.findObjectById('71b6b01c-ebeb-4a22-833b-95bc50c1e036'));
  };

  return (
    <div className='left-half'>
      <div className='spline'>
        <Spline
          scene='https://prod.spline.design/9415sx1lBu-BzC3E/scene.splinecode'
          onLoad={onLoad}
        />
      </div>
      <div>
        <Spline scene='https://prod.spline.design/nYmRZvnKhKUC0i50/scene.splinecode' />
      </div>
    </div>
  );
};

export default App;
