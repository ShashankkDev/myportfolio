import './App.css';
import Nav from "./Components/Navbar/Nav";
import Headers from "./Components/Headers/Headers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
    <div className="App">
       
        <Routes>
          <Route path="/" element={<Headers/>}></Route>
         
        </Routes>
    </div>
    </Router>
  )
};

export default App;
