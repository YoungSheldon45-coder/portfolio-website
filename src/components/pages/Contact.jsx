import React, { useRef } from 'react';
import { contact } from '../data/dummydata';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submission

    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.user_name.value, // Gets the value from the Name input
        email: e.target.user_email.value, // Gets the value from the Email input
        subject: e.target.subject.value, // Gets the value from the Subject input
        message: e.target.message.value, // Gets the value from the Message textarea
      }),
    })
      .then((res) => res.json()) // Parses the JSON response
      .then((data) => {
        if (data.message === 'Email sent successfully') {
          alert('Message sent successfully!'); // Alert on success
        } else {
          alert('There was an error sending your message.'); // Alert on error
        }
      })
      .catch((error) => {
        console.error(error); // Logs error for debugging
        alert('There was an error with the server.'); // Alert if there’s an issue with the server
      });
  };

  return (
    <>
      <div className="contact">
        <div className="container">
          <h1 className="contact-heading">Keep In Touch</h1>
          <div className="content flexsb">
            <div className="right">
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Name" required data-aos="zoom-in-down" data-aos-easing="linear"/>
                <input type="email" name="user_email" placeholder="Email" required data-aos="zoom-in-up" data-aos-easing="linear"/>
                <input type="text" name="subject" placeholder="Subject" required data-aos="zoom-in-up" data-aos-easing="linear"/>
                <textarea name="message" cols="10" rows="4" placeholder="Your message" required data-aos="zoom-in-down" data-aos-easing="linear"></textarea>
                <button type="submit" >Submit</button>
              </form>
            </div>
            <div className="left">
              {contact.map((item, index) => (
                <div className="box" key={index} data-aos="zoom-in-down" data-aos-easing="linear">
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
