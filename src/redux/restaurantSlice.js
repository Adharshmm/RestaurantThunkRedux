import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// Define the async thunk
export const fetchRestaurant = createAsyncThunk(
    'restaurantSlice/fetchRestaurant',
    async () => {
        const response = await axios.get('/restaurant.json');
        return response.data;
    }
);

// Create the slice
const restaurantSlice = createSlice({
    name: 'restaurantList',
    initialState: {
        loading: false, // Loading state for asynchronous operations
        allRestaurant: [], // Data to be fetched
        error: '', // Error message if request fails
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRestaurant.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchRestaurant.fulfilled, (state, action) => {
                state.loading = false;
                state.allRestaurant = action.payload;
                state.searchRestaurant = action.payload;
                state.error = '';
            })
            .addCase(fetchRestaurant.rejected, (state, action) => {
                state.loading = false;
                state.allRestaurant = [];
                state.error = action.error.message;
            });
    },
    reducers:{
        searchRestaurant:(state,actions)=>{
            state.allRestaurant.restaurants = state.searchRestaurant?.restaurants.filter(item => item.neighborhood.toLowerCase().includes(actions.payload));

        }
    }
});
export default restaurantSlice.reducer;
export const {searchRestaurant}=restaurantSlice.actions;
//Redux is synchronus operation
//But Api is a Asynchronus and file read or write is also async ,
//to deal with asynchronus operation in redux,we are using redux Thunk
//Thunk is not a part of slice, separate method in redux toolkit