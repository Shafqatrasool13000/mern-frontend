import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./layout/About/About";
import Contact from "./layout/Contact/Contact";
import Home from "./layout/Home/Home";
import Login from "./layout/Login/Login";
import Register from "./layout/Register/Register";
import ProtectedRoute from "./ProtectedRoute";
import Main from "./layout/Main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [isLogin, setisLogin] = useState(true);
  console.log(document.cookie,'cookies in frontend');
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<ProtectedRoute isLogin={isLogin}><Main /></ProtectedRoute>}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="aboutme" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </>
  );
}

export default App;
