
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Career from './Pages/Career/Career';
import About from './Pages/About/About';

function App() {
  return (
 <div>
    <Header></Header>
     <Routes>
         <Route path="/" element={<Home></Home>} />
         <Route path="career" element={<Career></Career>} />
         <Route path="about" element={<About></About>} />
     </Routes>
 </div>
  );
}

export default App;
