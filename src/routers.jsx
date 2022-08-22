import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from "./pages/login/Login";
import { Home } from './pages/home/Home';
import { CreateUser } from './pages/createUser/CreateUser';
import { CreateFeedback } from './pages/createFeedback/CreateFeedback';
import { NotFound } from './pages/notFound/NotFound';
import { ProfileCollaborator } from './pages/profileCollaborator/ProfileCollaborator';
import { Collaborators } from './pages/collaborators/Collaborators';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from 'styled-components';
import { FeedbackProvider } from './context/FeedbackContext';
import { useChooseStateTheme } from './hooks/useChooseStateTheme';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';

function Routers() {
    const [theme, setTheme] = useChooseStateTheme("theme", light)

    const handleToggleTheme = () => {
        setTheme(theme.title == "light" ? dark : light)
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <BrowserRouter>
                <AuthProvider>   
                    <UserProvider>
                        <FeedbackProvider>
                            <Routes>
                                <Route path='/' element={<Login />} />
                                <Route path='/user/create' element={<CreateUser />} />
                                <Route element={<PrivateRoute handleToggleTheme={handleToggleTheme} theme={theme}/>}>
                                    <Route path='home' element={<Home />} />
                                    <Route path='feedback/create/:id' element={<CreateFeedback />} />
                                    <Route path='feedback/create' element={<CreateFeedback />} />
                                    <Route path='collaborators' element={<Collaborators />} />
                                    <Route path='collaborator/profile/:id' element={<ProfileCollaborator />} />
                                </Route>
                                <Route path='*' element={<NotFound />} />
                            </Routes>
                        </FeedbackProvider>
                    </UserProvider>  
                </AuthProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}
export default Routers;