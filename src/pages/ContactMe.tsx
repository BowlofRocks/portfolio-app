function ContactMe() {
    return (<>
    <section className="contact-container">
      <h3 className="display-4">Contact Me</h3>
      <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="XXX-XXX-XXXX" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
  </div>
  <button type="button" className="btn btn-primary">Send Contacts</button>
  </section>
    </>)

    
}

export default ContactMe;