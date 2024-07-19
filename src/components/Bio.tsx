import React, {useEffect, ReactElement, useState} from "react";
import { getProjects, Data} from "../js/porfolio";

function AboutMe() {
    return (<>
    <div className="container ">
    
    <img  src="./src/assets/profile-pic.jpg" className="profile-pic" alt="profile-pic"/>
    <h1 className="display-1"><u>About.</u></h1>
    <figure>
  <blockquote className="blockquote">
    <p><small>Welcome to my portfolio site! My name is Paul Amago. I came from a small town in Minnesota called Baudette.
        I love all forms of art specifically painting and drawing as they are ways that we can express ourselves. 
        I aspire to help businesses express themselves thorugh their websites.</small> </p>
  </blockquote>
</figure>
</div>

<div className="container ">
<h1 className="display-1"><u>Proficiencies.</u></h1>
<p><small>These are all of the languaages that I am proficient in based on color</small> </p>
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Language</th>
      <th scope="col">Proficiency Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td className="table-success">C++</td>
      <td className="table-success">Competant</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td className="table-warning">C#</td>
      <td className="table-warning">Competant</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td className="table-success">CSS/HTML/JS</td>
      <td className="table-success">Proficient</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td className="table-success">React Typescript</td>
      <td className="table-success">Competant</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td className="table-success">Python</td>
      <td className="table-success">Competant</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td className="table-warning">React Native</td>
      <td className="table-warning">Competant</td>
    </tr>
  </tbody>
</table>
  <h3 className="project-prompt"><small className="text-muted">Interested in seeing my projects? </small></h3>
  <a className="nav-link active" aria-current="page" href="#/portfolio">
    <button type="button" className="btn btn-primary btn-lg">Click Here</button>
  </a>
</div>
    </>)

    
}

export default AboutMe;