import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';


function App() {
  return (
    <> 
     
      <BrowserRouter>
      <div className="back">
        <Navbar/>
       
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<About/>} />
          <Route path='skills' element={<Skills/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
        
        </div>
      
      </BrowserRouter>
    
    </>
  );
}

export default App;
