import '../CSS/Projects.css';

const Projects = () => {
  return (
    <>
      <div className='project-wrapper'>
        <div className='project-card'>
          <img
            className='project-img'
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif'
            alt=''
          />
          <a
            className='project-link'
            target='_blank'
            rel='noreferrer'
            href='https://poke-gen.onrender.com/'
          >
            <p>poke-api</p>
          </a>
        </div>
        <div className='project-card'>
          <img
            className='project-img'
            src='https://build-a-chatbot-wwl8.onrender.com/images/pixelbot-robot.gif'
            alt=''
          />
          <a
            className='project-link'
            target='_blank'
            rel='noreferrer'
            href='https://build-a-chatbot-wwl8.onrender.com/'
          >
            <p>chatbot</p>
          </a>
        </div>
        <div className='project-card'>
          <img
            className='project-img'
            src='https://i.ibb.co/mF0Y2Yc/font-face-logo-square-01.png'
            alt=''
          />
          <a
            className='project-link'
            target='_blank'
            rel='noreferrer'
            href='https://react-online-shop.onrender.com/'
          >
            <p>font-face</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
