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
            poke-api
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
