import "./App.scss";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import BorderPage from "./pages/BorderPage/BorderPage.jsx";

function App() {;

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/border" element={<BorderPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
