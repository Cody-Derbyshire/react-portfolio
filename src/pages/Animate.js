import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import '../CSS/Animate.css';

gsap.registerPlugin(ScrollTrigger);

const Animate = () => {
  const main = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const images = self.selector('.animate-img');
      images.forEach((image) => {
        gsap.to(image, {
          x: 100,

          duration: 3,
          scrollTrigger: {
            trigger: image,
            start: 'bottom bottom',
            end: 'top top',

            scrub: true,
            scroller: main.current,
          },
        });
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className='animate-wrapper' ref={main}>
        <div className='animate-img-wrapper'>
          <h1>Animate</h1>
          <img
            className='animate-img a'
            id='a'
            src={`https://picsum.photos/id/69/200`}
            alt=''
          />
        </div>
        <div className='animate-img-wrapper'>
          <h1>Some</h1>
          <img
            className='animate-img b'
            id='b'
            src={`https://picsum.photos/id/69/200`}
            alt=''
          />
        </div>
        <div className='animate-img-wrapper'>
          <h1>Freakin</h1>
          <img
            className='animate-img c'
            id='c'
            src={`https://picsum.photos/id/69/200`}
            alt=''
          />
        </div>
        <div className='animate-img-wrapper'>
          <h1>Images</h1>
          <img
            className='animate-img d'
            id='d'
            src={`https://picsum.photos/id/69/200`}
            alt=''
          />
        </div>
        <div className='animate-img-wrapper'>
          <h1>On</h1>
          <img
            className='animate-img e'
            id='e'
            src={`https://picsum.photos/id/69/200`}
            alt=''
          />
        </div>
        <div className='animate-img-wrapper'>
          <h1>Scroll</h1>
          <img
            className='animate-img f'
            id='f'
            src={`https://picsum.photos/id/69/200`}
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default Animate;
