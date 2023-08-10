import "./Banner.css"


const Banner = () => {

  const handleOpenResume = () => {
    // Open the resume PDF in a new window or tab
    window.open('/images/shashank_resume.pdf', '_blank');
  };


  return (
    <div className='banner'>
      <div className="banner-content">
        <div className="heading">
          <h1>Hello,🤝 I'm <span>Shashank</span> <br/>
              Front End Developer</h1>
        </div>
      <div className="resume">
          <button onClick={handleOpenResume}>Resume</button>
      </div>
       
        
      </div>
    </div>
  )
}

export default Banner;
