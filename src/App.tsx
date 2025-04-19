import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './pages/home';
import About from './pages/about';
import Helps from './pages/helps';
import './App.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/helps" element={<Helps />} />
            </Routes>
        </Router>
    );
}

export default App;
