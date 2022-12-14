import {Route, Routes} from 'react-router-dom';
import Header from './shared/Header';

import './App.css';
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    return (
        <div className="app">
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
