import './Stack.css';
import html from '/images/html.png';
import css from '/images/css.png';
import javascript from '/images/javascript.png';
import react from '/images/react.png';
import tailwind from '/images/tailwind.png';
import scss from '/images/scss.png';
import photoshop from '/images/ps.png';
import figma from '/images/figma.png';

const Stack = () => {

  return (
    <div className='stack-container'>
      <div className="stack-content">
        <div className="tech-stack">
          <p>Tech-Stack</p>
        </div>
        <div className="stacks">
          <div className="stack-images html">
            <img src={html} alt="" />
          </div>
          <div className="stack-images">
            <img src={css} alt="" />
          </div>
          <div className="stack-images">
            <img src={javascript} alt="" />
          </div>
          <div className="stack-images">
            <img src={react} alt="" />
          </div>
          <div className="stack-images">
            <img src={tailwind} alt="" />
          </div>
          <div className="stack-images">
            <img src={scss} alt="" />
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Stack
