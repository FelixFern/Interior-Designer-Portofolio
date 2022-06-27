import './App.css'; 
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

import { yPosContext } from './context/global-state';
import { useEffect, useState } from 'react';

function App() {
    const [yPos, setYPos] = useState(0)

    useEffect(() => {
        document.title = "Interior Design"
    }, [])

    return (
        <yPosContext.Provider value={{ yPos, setYPos }}>
            <Navbar className="navbar"></Navbar>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/portfolio" element={<Portfolio/>}></Route>
                    <Route path='/portfolio/d' element={
                    <PortfolioDetail
                        title="DESIGN TITLE"
                        subtitle="SUB TITLE"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor mauris et gravida accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor mauris et gravida accumsan. "
                        image_list={["../project/portfolios/2022/1/1.jpg", "../project/portfolios/2022/1/2.jpg", "../project/portfolios/2022/1/3.jpg", "../project/portfolios/2022/1/4.jpg", "../project/portfolios/2022/1/1.jpg", "../project/portfolios/2022/1/2.jpg", "../project/portfolios/2022/1/3.jpg", "../project/portfolios/2022/1/4.jpg", "../project/portfolios/2022/1/1.jpg", "../project/portfolios/2022/1/2.jpg", "../project/portfolios/2022/1/3.jpg", "../project/portfolios/2022/1/4.jpg", "../project/portfolios/2022/1/1.jpg", "../project/portfolios/2022/1/2.jpg", "../project/portfolios/2022/1/3.jpg", "../project/portfolios/2022/1/4.jpg"]}
                        
                    ></PortfolioDetail>}></Route>
                </Routes>    
            </Router>
        </yPosContext.Provider>
        
    );
}

export default App;
