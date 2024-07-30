import React, {useEffect} from "react";


  

function ContactMe() {
  useEffect(() => {
    let contactForm = document.getElementById("contact-form") as HTMLFormElement;

    function handleSubmit(event: Event) {
      event.preventDefault();
      console.log("Form submitted");

      // Get input values
      let email = GetInputVal("email");
      let number = GetInputVal("number");
      let message = GetInputVal("message");

      // Check the input values
      console.log( email, number, message);
    }

    if (contactForm) {
      contactForm.addEventListener("submit", handleSubmit);
    }

    function GetInputVal(id: string) {
      return (document.getElementById(id) as HTMLInputElement).value;
    }
  }, []);
  
    return (<>
    <form className="contact-container" id="contact-form">
      <h3 className="display-4">Contact Me</h3>
      <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
    <input type="phone" className="form-control" id="number" placeholder="XXX-XXX-XXXX" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
    <textarea className="form-control" id="message" rows={3}></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Send Contacts</button>
  </form>
    </>)

    
}

export default ContactMe;