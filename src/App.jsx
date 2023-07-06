import './App.css';
import Nav from "./Components/Navbar/Nav";
import Headers from "./Components/Headers/Headers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
    <div className="App">
       <Nav /> 
       <Headers/>
        <Routes>
       {  /* <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
  <Route path="*" element={<Error />}></Route> */}
        </Routes>
    </div>
    </Router>
  )
};

export default App;
