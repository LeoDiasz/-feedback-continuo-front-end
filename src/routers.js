import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import Login from "./pages/login/Login";
import Profile from './pages/profile/Profile';

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/homepage' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Routers;