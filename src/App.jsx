import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Destination from './pages/Destination';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Detail from './pages/Detail';


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="min-h-[calc(100vh-200px)]">
        <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/detail/:slug" element={<Detail />} /> 
          <Route path="/destination/:slug" element={<Destination />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;