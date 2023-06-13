import './App.css';

const App = () => {
  return (
    <div className='right-half'>
      <div className='title-div'>
        <h1>
          Hi, <span className='bold-span'>I'm Cody.</span>
        </h1>
      </div>

      <div className='title-div'>
        <h1>
          I'm a <span className='designer-bold-span'>designer</span> <br />+
          <span className='webdev-bold-span'>web developer.</span>
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
            0220725530
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
