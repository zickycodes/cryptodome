import { configureStore } from "@reduxjs/toolkit";

import fetchCryptoSlice from "../services/cryptoApi";
import newsSlice from "../services/cryptoNewsApi";
import fetchCryptoHistory from "../services/cryptoHistory";

const store = configureStore({
  reducer: {
    crypto: fetchCryptoSlice,
    news: newsSlice,
    history: fetchCryptoHistory,
  },
});

export default store;
