import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import { AddNew, Home, Login, SignUp } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
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
