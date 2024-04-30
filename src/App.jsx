import { useState } from 'react'
 import { BrowserRouter,Routes,Route } from 'react-router-dom' 

import './App.css'
import NavBar from './Layout/NavBar';
import Home from './Pages/Home';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
import ForgotPassword from './Auth/ForgotPassword';
import FriendProfile from './Pages/FriendProfile';
import Profile from './Pages/Profile';


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/> 
      <Routes>
       {/* <Route element={<NavBar/> }> 

        </Route> */}
       <Route path='/' element={<Home/>}/>
       <Route path='/FriendProfile' element={<FriendProfile/>}/>
       <Route path='/Profile' element={<Profile/>}/>
        <Route path='/SignUp' element={<SignUp/>}/> 
        <Route path='/SignIn' element={<SignIn/>}/> 
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/> 

       </Routes> 
       </BrowserRouter>
    </>
  )
}

export default App
