import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import Signin from './pages/SigninPage/SigninPage';
import Signup from './pages/SignupPage/SignupPage';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import './App.css'
import TaskPage from './pages/TaskPage/TaskPage.jsx';
import ExitPage from './pages/ExitPage/ExitPage.jsx';

export default function App() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  function login(newUser) {
    setUser(newUser)
    navigate(appRoutes.MAIN)
  }

  function logout() {
    setUser(null)
    navigate(appRoutes.SIGNIN)
  }

  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage user={user} />} />
        <Route path={appRoutes.TASK} element={<TaskPage />} />
        <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
      </Route>
      <Route path={appRoutes.SIGNIN} element={<Signin login={login} />} />
      <Route path={appRoutes.SIGNUP} element={<Signup />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  )
}