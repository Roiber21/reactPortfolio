import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'

const Contact = () => {
    const [sendForm, setChangeForm] = useState(false)


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmailmessage', 'template_2igby2l', form.current, 'Xy5PTmNkwlPAwu8DO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setChangeForm(true)
        setTimeout(()=>
            setChangeForm(false),5000
        )
    };
 
    return (
        <> 
        <h1 id='contact' className='title_projects'>Contact me</h1>

        <main className='container_contact' >
            <section className='items_contact'>
                <div className='item_contact' ><a className='a_item_contact' target='_blank'  href="mailto:roiberale@gmail.com">Send Email</a></div>
                <div className='item_contact' ><a className='a_item_contact' target='_blank'  href="https://api.whatsapp.com/send?phone=+573024302458&text=hola,%20me%20gusto%20tu%20portafolio">Whatsapp</a></div>
                <div className='item_contact' ><a className='a_item_contact' target='_blank'  href="https://www.linkedin.com/in/roiber-figueroa-6275391ba/">LinkedIn</a></div>
            </section>
            <form ref={form} onSubmit={sendEmail} className='form_contact' action="">
                <label htmlFor="name">Name</label>
                <input placeholder='Your name' required className='input_contact' type="text" name="name" />
               
                <label htmlFor="email">Email Address</label>
                <input placeholder='Your email address' required className='input_contact' type="email" name="email" id="email" />
                <label htmlFor="field">Message</label>
                <textarea required className='input_contact' placeholder="How can I help you?" maxlength="500" name="field" id="field" cols="30" rows="6"></textarea>
                <input className='input_submit'  type="submit" data-wait="Please wait..." value="Submit" />
                {
                   sendForm &&  <div className='success_message'>
                   <span>Thank you! Your submission has been received!</span>
               </div>
                }
               
            </form>
           
        </main>
        </>
    );
}

export default Contact;