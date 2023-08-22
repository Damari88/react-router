import "./App.css";
import { Menu } from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Page01} from "./pages/Page01";
import { Page02} from "./pages/Page02";
import { Page03} from "./pages/Page03";
import { React } from "./pages/React";
function App() {
  return (
    <div>
      <h1>Clase de react</h1>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page01" element={<Page01/>} /> 
          <Route path="/page02" element={<Page02/>} />
          <Route path="/page03" element={<Page03/>} />
          <Route path="/React" element={<React/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
