import React from 'react'
import { Routes, Route } from 'react-router-dom'
import useSocket from './features/hook/useSocketio';
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoute from './Components/PrivateRoutes';
import Dashboard from './Pages/DashBoard';
import Profile from './Pages/Profile';
import InterviewRunner from './Pages/InterviewRunner';
import SessionReview from './Pages/SessionReview';
import NotFound from './Pages/NotFound';

const App = () => {
  useSocket();
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <main className='container mx-auto p-4'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/interview/:sessionId' element={<InterviewRunner />} />
            <Route path="/review/:sessionId" element={<SessionReview />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>
      <ToastContainer position='top-right' autoClose={3000}/>

    </div>
  )
}

export default App