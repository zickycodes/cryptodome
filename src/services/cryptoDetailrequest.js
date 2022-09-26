import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const fetchCryptoDetail = createAsyncThunk(
  "cryptoDetails/fetchcryptodetails",
  async (uuid) => {
    console.log(uuid);
    // console.log(time);
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coin/" + uuid,

      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_CRYPTODETAIL_KEY,
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
    console.log(uuid);
    // console.log(time);
    const response = await axios.request(options);
    console.log(response.data.data.coin);
    return response.data.data;
  }
);

const cryptoDetailSlice = createSlice({
  name: "cryptoDetails",
  initialState: { loadingDetail: true },
  extraReducers: (builder) => {
    builder.addCase(fetchCryptoDetail.fulfilled, (state, action) => {
      console.log(action);
      return { ...action.payload, loadingDetail: false };
    });
  },
});

export default cryptoDetailSlice.reducer;
export { fetchCryptoDetail };
