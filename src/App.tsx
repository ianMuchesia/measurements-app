import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import { AddNew, Home } from "./pages"

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AddNew" element={<AddNew/>}/>
      
    </Routes>
 
    </BrowserRouter>
  
     </>
  )
}

export default App
