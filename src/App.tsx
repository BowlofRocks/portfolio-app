import NavBar from "./components/Nav";
import AboutMe from "./components/Bio";
import ContactMe from "./components/ContactMe";
function App() {
  return (<>
  <header><NavBar/></header>
  <main>
    <AboutMe/>
    <ContactMe/>
  </main>
  </>);
}

export default App;

