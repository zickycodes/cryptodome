import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const fetchCryptoHistory = createAsyncThunk(
  "cryptohistory/fetchcryptohistory",
  async ({ coinId, timeStamp }) => {
    console.log(coinId, timeStamp);
    // console.log(time);
    const options = {
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coin/${coinId}/history`,
      params: {
        // referenceCurrencyUuid: `${coinId}`,
        timePeriod: `${timeStamp}`,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_CRYPTODETAIL_KEY,
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    // console.log(time);
    const response = await axios.request(options);
    return response.data.data;
  }
);

const cryptoHistorySlice = createSlice({
  name: "cryptohistory",
  initialState: { loadingHistory: true },
  extraReducers: (builder) => {
    builder.addCase(fetchCryptoHistory.fulfilled, (state, action) => {
      console.log(action);
      return { ...action.payload, loadingHistory: false };
    });
  },
});

export default cryptoHistorySlice.reducer;
export { fetchCryptoHistory };
