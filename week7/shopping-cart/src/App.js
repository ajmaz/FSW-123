import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
