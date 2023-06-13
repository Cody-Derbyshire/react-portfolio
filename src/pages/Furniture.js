import { NavLink } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import '../App.css';
/* import ConsoleLog from '../components/ConsoleLog'; */

const Furniture = () => {
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const fifthRef = useRef();
  const popUpRef1 = useRef();
  const popUpRef2 = useRef();
  const popUpRef3 = useRef();
  const popUpRef4 = useRef();
  const popUpRef5 = useRef();
  const [firstRefSrc, setFirstRefSrc] = useState();
  const [firstRefAlt, setFirstRefAlt] = useState();
  const [secondRefSrc, setSecondRefSrc] = useState();
  const [secondRefAlt, setSecondRefAlt] = useState();
  const [thirdRefSrc, setThirdRefSrc] = useState();
  const [thirdRefAlt, setThirdRefAlt] = useState();
  const [fourthRefSrc, setFourthRefSrc] = useState();
  const [fourthRefAlt, setFourthRefAlt] = useState();
  const [fifthRefSrc, setFifthRefSrc] = useState();
  const [fifthRefAlt, setFifthRefAlt] = useState();
  const [refDiag1, setRefDiag1] = useState();
  const [refDiag2, setRefDiag2] = useState();
  const [refDiag3, setRefDiag3] = useState();
  const [refDiag4, setRefDiag4] = useState();
  const [refDiag5, setRefDiag5] = useState();

  const dataHover = 'click anywhere to look closer';

  useEffect(() => {
    setFirstRefSrc(firstRef.current.src);
    setFirstRefAlt(firstRef.current.alt);

    setSecondRefSrc(secondRef.current.src);
    setSecondRefAlt(secondRef.current.alt);

    setThirdRefSrc(thirdRef.current.src);
    setThirdRefAlt(thirdRef.current.alt);

    setFourthRefSrc(fourthRef.current.src);
    setFourthRefAlt(fourthRef.current.alt);

    setFifthRefSrc(fifthRef.current.src);
    setFifthRefAlt(fifthRef.current.alt);

    setRefDiag1(popUpRef1.current);
    setRefDiag2(popUpRef2.current);
    setRefDiag3(popUpRef3.current);
    setRefDiag4(popUpRef4.current);
    setRefDiag5(popUpRef5.current);
  }, []);

  const openDiag1 = () => {
    refDiag1.showModal();
  };
  const closeDiag1 = () => {
    refDiag1.close();
  };
  const openDiag2 = () => {
    refDiag2.showModal();
  };
  const closeDiag2 = () => {
    refDiag2.close();
  };
  const openDiag3 = () => {
    refDiag3.showModal();
  };
  const closeDiag3 = () => {
    refDiag3.close();
  };
  const openDiag4 = () => {
    refDiag4.showModal();
  };
  const closeDiag4 = () => {
    refDiag4.close();
  };
  const openDiag5 = () => {
    refDiag5.showModal();
  };
  const closeDiag5 = () => {
    refDiag5.close();
  };

  return (
    <>
      <div className='image-wrapper-furniture'>
        <div className='img-wrapper' data-hover={dataHover}>
          <img
            onClick={openDiag1}
            src='https://i.ibb.co/6Wt7rYH/layouts-armchair.webp'
            alt='armchair'
            className='furniture-img'
            ref={firstRef}
          />
        </div>

        <div className='img-wrapper' data-hover={dataHover}>
          <img
            onClick={openDiag2}
            src='https://i.ibb.co/TwZHRnF/layouts-bedsidetable.webp'
            alt='bedside table'
            className='furniture-img'
            ref={secondRef}
          />
        </div>
        <div className='img-wrapper' data-hover={dataHover}>
          <img
            onClick={openDiag3}
            src='https://i.ibb.co/Fs0tb96/layouts-couch.webp'
            alt='couch'
            className='furniture-img'
            ref={thirdRef}
          />
        </div>
        <div className='img-wrapper' data-hover={dataHover}>
          <img
            onClick={openDiag4}
            src='https://i.ibb.co/ZmSK9yB/layouts-plamp.webp'
            alt='kumiko lamp'
            className='furniture-img'
            ref={fourthRef}
          />
        </div>
        <div className='img-wrapper' data-hover={dataHover}>
          <img
            onClick={openDiag5}
            src='https://i.ibb.co/829k3Rh/layouts-recordstand.webp'
            alt='record stand table'
            className='furniture-img'
            ref={fifthRef}
          />
        </div>
      </div>

      <dialog className='popUp' id='popUp' ref={popUpRef1}>
        <img src={firstRefSrc} alt={firstRefAlt} />
        <NavLink to='#' className='closebtn' onClick={closeDiag1}>
          close
        </NavLink>
      </dialog>
      <dialog className='popUp' id='popUp' ref={popUpRef2}>
        <img src={secondRefSrc} alt={secondRefAlt} />
        <NavLink to='#' className='closebtn' onClick={closeDiag2}>
          close
        </NavLink>
      </dialog>
      <dialog className='popUp' id='popUp' ref={popUpRef3}>
        <img src={thirdRefSrc} alt={thirdRefAlt} />
        <NavLink to='#' className='closebtn' onClick={closeDiag3}>
          close
        </NavLink>
      </dialog>
      <dialog className='popUp' id='popUp' ref={popUpRef4}>
        <img src={fourthRefSrc} alt={fourthRefAlt} />
        <NavLink to='#' className='closebtn' onClick={closeDiag4}>
          close
        </NavLink>
      </dialog>
      <dialog className='popUp' id='popUp' ref={popUpRef5}>
        <img src={fifthRefSrc} alt={fifthRefAlt} />
        <NavLink to='#' className='closebtn' onClick={closeDiag5}>
          close
        </NavLink>
      </dialog>
    </>
  );
};

export default Furniture;
