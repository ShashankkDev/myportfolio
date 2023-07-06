import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className='contactus-container'>
    <div className="contactus-content">
      <div className="heading">
        <h3>Contact Me</h3>
      </div>
      <div className="contact-form">
        <form action='https://formspree.io/f/mwkdkkow' method='POST' className='contactus-inputs'>
            <input type="text" name='username' placeholder='username' autoComplete='off' required />

            <input type="email" name='Email' placeholder='Email' autoComplete='off' required />

            <textarea name="message"  cols="30" rows="2" autoComplete='off' required placeholder="Message"></textarea>
        
            <input type="submit" value="Send" />
        </form>
      </div>
      </div>
    </div>
  )
}

export default ContactUs;
