import React, {useEffect, ReactElement, useState} from "react";
import { getProficiencies, Data, Proficiencies} from "../js/proficiencies";


function AboutMe() {

  const [data, setdata] = useState<Data | null>(null);
  useEffect(() => {
    const fetchProficiencies = async () => {
      const result = await getProficiencies();
      console.log(result);
      setdata(result);
    };
    fetchProficiencies();
  }, []);

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
            <th scope="col">Interest Level</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.proficiencies.map((proficiency,index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td className={`table-${proficiency.interestLevel}`}>{proficiency.languages}</td>
                <td className={`table-${proficiency.interestLevel}`}>{proficiency.profLevel}</td>
                <td className={`table-${proficiency.interestLevel}`}>{proficiency.interestLevel}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>Loading...</td>
            </tr>
          )}
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