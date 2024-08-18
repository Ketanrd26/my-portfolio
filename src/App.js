import logo from "./logo.svg";
import "./App.scss";
import Header from "./component/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cursor from "./cursor/Cursor";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Cursor/>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
