export interface Proficiencies {
    index : string; 
    languages : string;
    profLevel : string;
    interestLevel : string
}

export interface Data { 
    proficiencies : Proficiencies[];
}

const url = "https://bowlofrocks.github.io/portfolio-app/src/data/proficiencies.json"

export async function getProficiencies(): Promise<any> {
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


