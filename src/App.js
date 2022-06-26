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
                </Routes>    
            </Router>
        </yPosContext.Provider>
        
    );
}

export default App;
