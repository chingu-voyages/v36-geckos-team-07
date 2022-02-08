import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

// Pages
import HomePage from './pages/HomePage';
//import ResourcePage from './pages/ResourcePage';
import AboutPage from './pages/AboutPage';
import TrendingNFTsPage from './pages/TrendingNFTsPage';
import NewsPage from './pages/NewsPage';
import ErrorPage from './pages/ErrorPage';
import ResourcePage from './pages/ResourcePage';

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
            <Route path='/resource' element={<ResourcePage/>} />
            <Route path='/trendingnfts' element={<TrendingNFTsPage/>} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>

    </Router>
  );
}

export default App;
