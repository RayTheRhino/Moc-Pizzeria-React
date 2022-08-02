import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from "./pages/Menu";
// import About from "./pages/About";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path= "/menu" element ={<Menu/>} />
          {/* <Route path= "/about" element ={<About/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
