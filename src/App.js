import React, { useEffect } from "react";
import Hompage from "./components/Hompage";

import { Routes, Route } from "react-router-dom";
import Cryptocurrencies from "./components/Cryptocurrencies";
import News from "./components/News";
import { useDispatch } from "react-redux";
import { fetchCrypto } from "./services/cryptoApi";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto());
    console.log("ff");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Hompage />}></Route>
      <Route path="/Cryptocurrencies" element={<Cryptocurrencies />} />
      <Route path="/News" element={<News />} />
    </Routes>
  );
};

export default App;
