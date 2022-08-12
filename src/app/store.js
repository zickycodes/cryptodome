import { configureStore } from "@reduxjs/toolkit";

import fetchCryptoSlice from "../services/cryptoApi";

const store = configureStore({
  reducer: {
    crypto: fetchCryptoSlice,
  },
});

export default store;
