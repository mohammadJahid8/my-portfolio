import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import ProjectDetail from './Components/ProjectDetail';
import Blogs from './Components/Blogs';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='max-w-[90rem] mx-auto'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<ProjectDetail />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
