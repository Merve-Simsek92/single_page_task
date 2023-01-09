
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Client from './components/Client';
import Contact from './components/Contact';
import Navbars from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import "./css/style.css"

function App() {
  return (
    <div className="App" id="#app">
      <Navbars/>
      <Banner/>
      <Services/>
      <Portfolio/>
      <About/>
      <Client/>
      <Contact/>

    </div>
  );
}

export default App;
