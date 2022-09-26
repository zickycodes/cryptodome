import { configureStore } from "@reduxjs/toolkit";

import fetchCryptoSlice from "../services/cryptoApi";
import newsSlice from "../services/cryptoNewsApi";
import fetchCryptoHistory from "../services/cryptoHistory";
import fetchCryptoDetail from "../services/cryptoDetailrequest";

const store = configureStore({
  reducer: {
    crypto: fetchCryptoSlice,
    news: newsSlice,
    history: fetchCryptoHistory,
    detail: fetchCryptoDetail,
  },
});

export default store;
