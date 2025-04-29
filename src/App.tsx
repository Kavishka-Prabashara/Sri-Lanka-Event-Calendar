
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Home from './pages/home';
import About from './pages/about';
import Helps from './pages/helps';
import './App.css';
import CalendarPage from "./pages/calendarPage";
import VesakPage from './pages/vesakFestival';
import HolidayPage from './pages/HoliDayPages.com'; // HolidayPage එක ආනයනය කරන්න

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
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/calendar/vesak" element={<VesakPage />} />
                <Route path="/holiday/:date" element={<HolidayPage />} /> {/* නිවාඩු දින සඳහා route එක */}
                <Route path="/calendar/vesak/thorana" element={<VesakThoranaPage />} />
                <Route path="/calendar/vesak/cards" element={<VesakCardsPage />} />
            </Routes>
        </Router>
    );
}

export default App;