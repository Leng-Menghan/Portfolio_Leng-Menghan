import { useState, useEffect } from "react";
import './App.css'
import NavBar from './components/nav_bar/nav_bar.jsx';
import HomePage from './pages/home_page.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowUp(true);
      } else {
        setShowUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className='align-items-center p-0 m-0'>
        <NavBar/>
        <HomePage/>
        <Footer/>
      </div>
      {showUp && (
        <a href="#" className="btn btn-secondary rounded-circle position-fixed bottom-50 end-0 d-flex justify-content-center align-items-center p-0 m-3" style={{width: "40px", height: "40px"}}>
          <i class="fa-solid fa-angles-up"></i>
        </a>
      )}
    </>
  )
}

export default App
