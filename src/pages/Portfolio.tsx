import React, {useEffect, ReactElement, useState} from "react";
import { getProjects, Data} from "../js/porfolio";


function Portfolio() {
  const [data, setdata] = useState<Data | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getProjects();
      console.log(result);
      setdata(result);
    };

    fetchData();
  }, []);

    return (<>
    <h1 className="text-center text-decoration-underline">Portfolio</h1>
    <main>
      <div className="grid" id="cards"></div>
      {data ? (
        data.projects.map((project, index)=> (
          <div className="card" key={index}>
            <h2>{project.name}</h2>
            <a href= {project.url}><img src={project.imageUrl}/></a>
          </div>
        )
        )
      ) : (<p>loading...</p>)}
    </main>
    </>
    )


}
export default Portfolio;