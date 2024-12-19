import './Contact.css';
import phone from '../../assets/new/callwhite.png';
import location from '../../assets/new/locationonwhite.png';
import mail from '../../assets/new/mailwhite.png';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f8fd3030-7b0f-4617-a390-d2ab61b526cf");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert(res.message);
        }
    }
  return (
    <div className="contact">
        <div className="contact-title">
            <h1>Contact me</h1>
        </div>
        <div id="contact" className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to contact me</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt="mail"/><p>vinayhc.webdev@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone} alt="mail"/><p>+91 8088589996</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="mail"/><p>Bangalore, India</p>
                    </div>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name"/>
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter email"/>
            <label htmlFor="">Write message</label>
            <textarea name="message" rows="8"  placeholder="    Write message"/>
            <button type="submit" className="contact-submit">Submit</button>
        </form>
    </div>
  );
}

export default Contact