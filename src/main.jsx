import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/User.jsx';
import { TasksProvider } from './contexts/Tasks.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <TasksProvider>
          <App />
        </TasksProvider>
      </UserProvider>
    </React.StrictMode>,
  </BrowserRouter>

)
