import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const fetchCrypto = createAsyncThunk("cryptos/fetchcryptos", async (count) => {
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      offset: "0",
      limit: `${count}`,
    },
    headers: {
      // "X-RapidAPI-Key": "65ce34489dmsh08e013df88b1120p17f019jsn7c8e9363e075",
      "X-RapidAPI-Key": process.env.REACT_APP_CRYPTODETAIL_KEY,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);
  return response.data.data;
});

console.log(process.env);

const cryptoSlice = createSlice({
  name: "cryptos",
  initialState: { loading: true },
  extraReducers: (builder) => {
    builder.addCase(fetchCrypto.fulfilled, (state, action) => {
      return { ...action.payload, loading: false };
    });
  },
});

export default cryptoSlice.reducer;
export { fetchCrypto };

// // First, create the thunk
// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (userId: number, thunkAPI) => {
//     const response = await userAPI.fetchById(userId)
//     return response.data
//   }
// )

// interface UsersState {
//   entities: []
//   loading: 'idle' | 'pending' | 'succeeded' | 'failed'
// }

// const initialState = {
//   entities: [],
//   loading: 'idle',
// } as UsersState

// // Then, handle actions in your reducers:
// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {
//     // standard reducer logic, with auto-generated action types per reducer
//   },
//   extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(fetchUserById.fulfilled, (state, action) => {
//       // Add user to the state array
//       state.entities.push(action.payload)
//     })
//   },
// })

// // Later, dispatch the thunk as needed in the app
// dispatch(fetchUserById(123))
