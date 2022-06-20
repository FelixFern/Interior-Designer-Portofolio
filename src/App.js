import './App.css'; 
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'

/* Importing Pages */ 
import Home from './pages/Home';
import Portofolio from './pages/Portofolio';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/portofolio" element={<Portofolio/>}></Route>
            </Routes>    
        </Router>
    );
}

export default App;
