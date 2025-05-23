import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/HomePage";
import UseStatePage from "./pages/UseStatePage";
import { Toaster } from "sonner";
import UseEffectPage from "./pages/UseEffectPage";
import Navbar from "./components/Navbar";
import UseContextPage from "./pages/UseContextPage";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-state" element={<UseStatePage />} />
          <Route path="/use-effect" element={<UseEffectPage />} />
          <Route path="/use-context" element={<UseContextPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
