import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import { AddNew, Home, Login, SignUp } from "./pages";
import { useEffect } from "react";
import checkAuthentication from "./store/authCheck";
import { useAppDispatch, useAppSelector } from "./hooks";

function App() {
  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector(state=>state.auth.isAuthenticated)

  useEffect(()=>{dispatch(checkAuthentication());},[])

 


  return (
    <>
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} />
        <main>
          <Routes>
            <Route path="/Measurements" element={<Home />} />
            <Route path="/Measurements/:id" element={<Home />} />
            <Route path="/AddNew" element={<AddNew />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
