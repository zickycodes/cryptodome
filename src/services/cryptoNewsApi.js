import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCryptoNews = createAsyncThunk(
  "news/fetchCryptoNews",
  async (newsCategory) => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: `${newsCategory}`,
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "65ce34489dmsh08e013df88b1120p17f019jsn7c8e9363e075",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);

    return response.data.value;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: { loadingNews: true, newsItems: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchCryptoNews.fulfilled, (state, action) => {
      return { newsItems: [...action.payload], loadingNews: false };
    });
  },
});

export default newsSlice.reducer;
export { fetchCryptoNews };
