import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Contact from './pages/Contact.jsx'
import AllFAQ from './pages/AllFAQ.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />} >
      <Route index element={<Home />} />
      <Route path='our-services' element={<Services />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='faq' element={<AllFAQ />} />


      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
