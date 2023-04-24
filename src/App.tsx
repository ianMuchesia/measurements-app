import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import { AddNew, Home } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AddNew" element={<AddNew />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
