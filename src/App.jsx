import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Projects, Contact, ThankYou, Error } from './Pages/Index';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AOS from 'aos';
AOS.init();

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/thankyou' element={<ThankYou />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
