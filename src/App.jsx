import React from 'react'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';



const App = () => {
  return (
    <>
   <Router>
    <div>
    <Routes>
              <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              
              </Route>
            
          
        </Routes>
    </div>
       
   </Router>
   </>
  

  )
}

export default App