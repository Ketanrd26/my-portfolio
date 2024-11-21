import logo from "./logo.svg";
import "./App.scss";
import Header from "./component/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cursor from "./cursor/Cursor";
import Blog from "./pages/blogs/Blog";
import ScrollToTop from "./component/scrolltotop/ScrollToTop"
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header />
      <Cursor/>
    <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
