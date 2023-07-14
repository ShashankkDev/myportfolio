
import Stack from '../Headers/TechStack/Stacks/Stack'
import './AboutMe.css'
import myimage from '/images/myimage.png'
import png from "/images/shape.png"

const AboutMe = () => {

  

  return (
    <div className='about-container' id='about' >
    <div className="png">
      <img src={png} alt="png" />
    </div>
    <div className="png2">
      <img src={png} alt="png" />
    </div>
      <div className="about-section">
        <div className="about-image">
            <img src={myimage} alt="my image" />
        </div>
        <div className="about-content">
                <h3>About Me</h3>
                <p>Hello, I'm Shashank, a highly skilled web developer with a strong focus on front-end technologies. I have extensive experience in HTML, CSS, and JavaScript, enabling me to create engaging and responsive websites. My proficiency in React allows me to build dynamic and interactive user interfaces, while my expertise in Tailwind CSS ensures efficient and stylish designs.
                Furthermore, I possess a keen eye for design and have honed my skills in visual communication tools such as Figma and Photoshop.</p>
                <Stack/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
