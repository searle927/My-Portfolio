import React from 'react';
import emailjs from "emailjs-com";
import './ContactForm.css'

export default function contactForm() {
    
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio_email', e.target, 'user_ILsTgtTDmBh1zgbKrAEMF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
       return(
           <div>
               <div className="container">
               <form onSubmit={sendEmail}>
                   <div className="row pt-5 mx-auto">
                       <div className="col-8 form-group mx-auto">
                           <input type="text" className="form-control" placeholder="Name" name="name"/>
                       </div>
                       <div className="col-8 form-group pt-2 mx-auto">
                           <input type="email" className="form-control" placeholder="Eamil Address" name="email"/>
                       </div>
                       <div className="col-8 form-group pt-2 mx-auto">
                           <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                       </div>
                       <div className="col-8 form-group pt-2 mx-auto">
                           <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                       </div>
                       <div className="col-9 pt-3 mx-auto">
                           <input type="submit" className="btn btn-info" value="Send Message"/>
                            </div>
                        </div>
                    </form>
               </div>
           </div>
       )
}
