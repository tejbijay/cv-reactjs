import Contacts from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testomonials from "./components/testomonials/Testomonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import "./app.scss"


function App() {
  return (
    <div className="app">
     <Topbar/>
     <div className="sections">
    <Intro/>
    <Portfolio/>
    <Works/>
    <Testomonials/>
    <Contacts/>

     </div>
    </div>
  );
}

export default App;
