import React, { useEffect } from "react";
import Hompage from "./components/Hompage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Cryptocurrencies from "./components/Cryptocurrencies";
import News from "./components/News";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import { fetchCryptoNews } from "./services/cryptoNewsApi";
import CryptoDetail from "./components/CryptoDetail";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoNews("Cryptocurrency"));
    console.log("ff");
  }, [dispatch]);

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hompage />}></Route>
        <Route path="/Cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/News" element={<News />} />
        <Route path="/cryptocurrencies/:coinId" element={<CryptoDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
