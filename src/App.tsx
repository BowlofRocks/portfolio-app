import NavBar from "./components/Nav";
import AboutMe from "./components/Bio";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (<>
  <header><NavBar/></header>
  <Router>
      <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<ContactMe />} />
    </Routes>
  </Router>
  <footer><Footer/></footer>
  </>);
}

export default App;

