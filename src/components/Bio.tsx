function AboutMe() {
    return (<>
    <div className="container ">
  <div className="row">
    <div className="col-lg-8 pt-4 pt-lg-6">
    <img  src="./src/assets/profile-pic.jpg" className="profile-pic float-end imgshadow me-3" alt="profile-pic"/>
    <h1 className="display-1"><u>About.</u></h1>
    <figure>
  <blockquote className="blockquote">
    <p><small>Welcome to my portfolio site! My name is Paul Amago. I came from a small town in Minnesota called Baudette.
        I love all forms of art specifically painting and drawing as they are ways that we can express ourselves. 
        I aspire to help businesses express themselves thorugh their websites.</small> </p>
  </blockquote>
</figure>
    </div>
  </div>
</div>

<div className="container ">
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

</div>
   
    </>)

    
}

export default AboutMe;