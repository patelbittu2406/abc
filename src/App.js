import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Sucess from "./page/Sucess";


function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Login/>} />
      <Route  path="home" element={<Home/>} />
      <Route  path="sucess" element={<Sucess/>} />
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
