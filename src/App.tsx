import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/HomePage";
import UseStatePage from "./pages/UseStatePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-state" element={<UseStatePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
