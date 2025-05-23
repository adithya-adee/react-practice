import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/HomePage";
import UseStatePage from "./pages/UseStatePage";
import { Toaster } from "sonner";
import UseEffectPage from "./pages/UseEffectPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-state" element={<UseStatePage />} />
          <Route path="/use-effect" element={<UseEffectPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
