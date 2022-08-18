import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from "./pages/login/Login";
import { Home } from './pages/home/Home';
import { CreateUser } from './pages/createUser/CreateUser';
import { CreateFeedback } from './pages/createFeedback/CreateFeedback';
import { NotFound } from './pages/notFound/NotFound';
import { ProfileCollaborator } from './pages/profileCollaborator/ProfileCollaborator';
import { ForgotPassword } from './pages/forgotPassword/ForgotPassword';
import { Collaborators } from './pages/collaborators/Collaborators';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { FeedbackProvider } from './context/FeedbackContext';

function Routers() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <UserProvider>
                    <FeedbackProvider>
                        <Routes>
                            <Route path='/' element={<Login />} />
                            <Route path='/user/create' element={<CreateUser />} />
                            <Route element={<PrivateRoute />}>
                                <Route path='/home' element={<Home />} />
                                <Route path='/feedback/create' element={<CreateFeedback />} />
                                <Route path='/collaborators' element={<Collaborators />} />
                                <Route path='/collaborator/profile/:id' element={<ProfileCollaborator />} />
                                <Route path='/user/forgot-password' element={<ForgotPassword />} />
                            </Route>
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </FeedbackProvider>
                </UserProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}
export default Routers;