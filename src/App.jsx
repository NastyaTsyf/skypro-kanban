
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import Signin from './pages/SigninPage/SigninPage';
import Signup from './pages/SignupPage/SignupPage';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import './App.css'
import TaskPage from './pages/TaskPage/TaskPage.jsx';
import ExitPage from './pages/ExitPage/ExitPage.jsx';
import NewTaskPage from "./pages/NewTaskPage/NewTaskPage.jsx";

export default function App() {

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path={appRoutes.MAIN} element={<MainPage />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage />} />
          <Route path={appRoutes.NEWCARD} element={<NewTaskPage />} />
        </Route>
      </Route>
      <Route path={appRoutes.SIGNIN} element={<Signin />} />
      <Route path={appRoutes.SIGNUP} element={<Signup />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  )
}