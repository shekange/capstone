import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import DecoratePage from "./pages/DecoratePage/DecoratePage.jsx";

function App() {;

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<DecoratePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
