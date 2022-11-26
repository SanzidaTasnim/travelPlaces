import "./App.css";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/Home/NotFound/NotFound";
import Contact from "./Components/Contact/Contact";
import Auth from "./Components/Auth/Auth";

export const MyContext = createContext();

function App() {
  const [area, setArea] = useState({
    id: 1,
    title: "Cox's Bazar",
    description:
      "Why Cox's Bazar is a Great Tourist Attraction Cox's Bazar Review. Cox's Bazar is famous for its long natural sandy sea beach. ... Cox's Bazar has the world's largest unbroken sea beach which stretches more than 120 km. The entire beach is a stretch of golden sandy sea beach which is reachable by motorbike.",
    img: "https://i.ibb.co/p1Fm5yD/coxsbazar.png",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('user');
  
  return (
    <MyContext.Provider value={[area, setArea, loggedIn, setLoggedIn, name, setName]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Contact />} />
        <Route path='/signup' element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
