import { NavLink } from 'react-router-dom';

import '../App.css';

const Furniture = () => {
  const furnitureImages = [
    {
      id: '1',
      url: 'https://i.ibb.co/6Wt7rYH/layouts-armchair.webp',
      alt: 'armchair',
    },
    {
      id: '1',
      url: 'https://i.ibb.co/TwZHRnF/layouts-bedsidetable.webp',
      alt: 'bedside table',
    },
    {
      id: '1',
      url: 'https://i.ibb.co/Fs0tb96/layouts-couch.webp',
      alt: 'couch',
    },
    {
      id: '1',
      url: 'https://i.ibb.co/ZmSK9yB/layouts-plamp.webp',
      alt: 'kumiko lamp',
    },
    {
      id: '1',
      url: 'https://i.ibb.co/829k3Rh/layouts-recordstand.webp',
      alt: 'record stand table',
    },
  ];

  const openImage1 = () => {
    document.getElementById('slide-in').style.width = '100%';
  };
  const closeImage1 = () => {
    document.getElementById('slide-in').style.width = '0%';
  };

  return (
    <>
      <div className='image-wrapper'>
        {furnitureImages.map((item) => (
          <div className='img-wrapper' key={item.id}>
            <img
              onClick={openImage1}
              src={item.url}
              alt={item.alt}
              className='furniture-img'
            />
          </div>
        ))}
      </div>

      <div className='slide-in' id='slide-in'>
        <div className='opened-div'>
          <img
            src={'https://i.ibb.co/6Wt7rYH/layouts-armchair.webp'}
            alt={'armchair'}
            className='opened-img'
          />
          <NavLink to='#' className='closebtn' onClick={closeImage1}>
            close
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Furniture;
