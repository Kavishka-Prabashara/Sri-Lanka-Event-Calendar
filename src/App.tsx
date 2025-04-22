import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './pages/home';
import About from './pages/about';
import Helps from './pages/helps';
import './App.css';

function HomeWithAbout() {
    return (
        <>
            <div id="home">
                <Home />
            </div>
            <div id="about">
                <About />
            </div>
        </>
    );
}

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeWithAbout />} />
                <Route path="/helps" element={<Helps />} />
            </Routes>
        </Router>
    );
}

export default App;
