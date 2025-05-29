import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/HomePage";
import UseStatePage from "./pages/UseStatePage";
import { Toaster } from "sonner";
import UseEffectPage from "./pages/UseEffectPage";
import Navbar from "./components/Navbar";
import UseContextPage from "./pages/UseContextPage";
import UseRefPage from "./pages/UseRefPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-state" element={<UseStatePage />} />
          <Route path="/use-effect" element={<UseEffectPage />} />
          <Route path="/use-context" element={<UseContextPage />} />
          <Route path="/use-ref" element={<UseRefPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
