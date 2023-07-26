import { Navbar } from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Technology from "./Components/Technology/Technology";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div>
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Technology/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
