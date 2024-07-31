import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Projects, Contact } from './Pages/Index';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
