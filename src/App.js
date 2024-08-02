
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/About/about";
import Edu from "./components/Education/edu";
import Skill from "./components/Skill/skill";
import Footer from "./components/Fu/footer";
import Contact from "./components/Contact/contact";
import Project from "./components/project/project";
// import "./index.css";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <About/>
     <Edu/>
     <Skill/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
