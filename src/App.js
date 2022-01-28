import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// CSS
import './App.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import AboutPage from './pages/AboutPage';
import TrendingNFTsPage from './pages/TrendingNFTsPage';
import NewsPage from './pages/NewsPage';
import ErrorPage from './pages/ErrorPage';

// Components
import NavBar from './components/Navbar/index';

function App() {
  return (
    <Router>
        
        <NavBar />

        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/home' element={<HomePage/>} />
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
