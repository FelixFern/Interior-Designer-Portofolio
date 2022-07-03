import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import './styles/App.css'; 
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

/* Importing Pages */ 
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import PortfolioDetail from './pages/PortfolioDetail';
import NotFound from './pages/NotFound';

import { yPosContext, hamburgerContext, portfolioContext } from './context/global-state';
import { useEffect, useState } from 'react';

export default function App() {
    const [yPos, setYPos] = useState(0)
    const [hamburgerToggle, setHamburgerToggle] = useState(false)
    const [portfolioData, setPortfolioData] = useState({})

    useEffect(() => {
        document.title = "Interior Design"
        axios.get("/api").then((res) => {
            setPortfolioData(res)
        }).catch((err) => {
            console.log(err)
        }).then(() => {})
    }, [])

    return (
        <yPosContext.Provider value={{ yPos, setYPos }}>
        <hamburgerContext.Provider value={{ hamburgerToggle, setHamburgerToggle }}>
        <portfolioContext.Provider value={{ portfolioData, setPortfolioData }}>
            <Navbar className="navbar"></Navbar>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/portofolio" element={<Portfolio/>}></Route>
                    <Route path='/portofolio/:year/:slug' element={<PortfolioDetail></PortfolioDetail>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>    
            </Router>
        </portfolioContext.Provider>
        </hamburgerContext.Provider>
        </yPosContext.Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);