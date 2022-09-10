import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const fetchCryptoDetail = createAsyncThunk(
  "cryptoDetails/fetchcryptodetails",
  async (uuid, time) => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history",
      params: {
        referenceCurrencyUuid: `${uuid}`,
        timePeriod: `${time}`,
      },
      headers: {
        "X-RapidAPI-Key": "65ce34489dmsh08e013df88b1120p17f019jsn7c8e9363e075",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
    console.log(uuid);
    console.log(time);
    const response = await axios.request(options);
    console.log(response);
  }
);

const cryptoHistorySlice = createSlice({
  name: "cryptoDetails",
  initialState: { loading: true },
  extraReducers: (builder) => {
    builder.addCase(fetchCryptoDetail.fulfilled, (state, action) => {
      console.log(action);
      return { ...action.payload, loading: false };
    });
  },
});

export default cryptoHistorySlice.reducer;
export { fetchCryptoDetail };
