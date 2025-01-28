import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Insights from './pages/Insights'
import Layout from './layout/Layout'
import Services from './pages/Services'
import Careers from './pages/Careers'
import About from './pages/About'
import Contact from './pages/Contact'
import { Toaster } from 'react-hot-toast'
import PrivacyPolicy from './pages/Privacy'
import NotFound from './pages/NotFound'
import Users from './pages/Users'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from './component/ScrollToTop'


function App() {


  return (
    <>
    <Toaster/>
     <BrowserRouter>
     <ScrollToTop />
     <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/ >}/>
        <Route path='insights'  element={<Insights/ >}/>
        <Route path='services'  element={<Services/ >}/>
        <Route path='careers'  element={<Careers/ >}/>
        <Route path='about'  element={<About/ >}/>
        <Route path='contact'  element={<Contact/ >}/>
        <Route path='privacy-policy'  element={<PrivacyPolicy/ >}/>
        <Route path='view-applications-talkwithaman01@gmail.com'  element={<Users/ >}/>
        <Route path='*'  element={<NotFound/ >}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
