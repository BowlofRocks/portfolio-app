export interface Proficiency {
    name : string; 
    url : string;
    imageUrl: string
}

export interface Data { 
    projects : Proficiency[];
}

const url = "https://bowlofrocks.github.io/portfolio-app/src/data/projects.json"

export async function getProjects(): Promise<any> {
  const response: Response = await fetch(url);
  try {
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(await response.text());
    }
  } catch (error: any) {
    console.log(error);
  }
}


