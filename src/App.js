import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/main.css';

// Pages
import EducationPage from './pages/EducationPage';
import AboutPage from './pages/AboutPage';
import TrendingNFTsPage from './pages/TrendingNFTsPage';
import NewsPage from './pages/NewsPage';
import ErrorPage from './pages/ErrorPage';

// Components
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
        
        <NavBar />

        <Routes>
            <Route path='/' element={<NewsPage/>} />
            <Route path='/news' element={<NewsPage/>} />
            <Route path='/education' element={<EducationPage/>} />
            <Route path='/trendingnfts' element={<TrendingNFTsPage/>} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>

    </Router>
  );
}

export default App;
