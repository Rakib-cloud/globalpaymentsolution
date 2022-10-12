
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './Pages/Home/Home';
import Career from './Pages/Career/Career';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
 <div>
      <Header></Header>
     <Routes>
         <Route path="/" element={<Home></Home>} />
         
         <Route path="about" element={<About></About>} />
         <Route path="career" element={<Career></Career>} />
     </Routes>
 </div>
  );
}

export default App;
