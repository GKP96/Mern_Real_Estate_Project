import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../utils/common";
export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async (sellerId) => {
    const response = await axios.get(`${url}/properties/${sellerId}`);
    return response.data;
  }
);

export const addProperty = createAsyncThunk(
  "properties/addProperty",
  async (property) => {
    const response = await axios.post(`${url}/properties`, property);
    return response.data;
  }
);

export const updateProperty = createAsyncThunk(
  "properties/updateProperty",
  async ({ id, property }) => {
    const response = await axios.put(`${url}/properties/${id}`, property);
    return response.data;
  }
);

export const deleteProperty = createAsyncThunk(
  "properties/deleteProperty",
  async (id) => {
    await axios.delete(`${url}/properties/${id}`);
    return id;
  }
);

const propertySlice = createSlice({
  name: "properties",
  initialState: {
    properties: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.properties = action.payload;
      })
      .addCase(addProperty.fulfilled, (state, action) => {
        state.properties.push(action.payload);
      })
      .addCase(updateProperty.fulfilled, (state, action) => {
        const index = state.properties.findIndex(
          (property) => property._id === action.payload._id
        );
        state.properties[index] = action.payload;
      })
      .addCase(deleteProperty.fulfilled, (state, action) => {
        state.properties = state.properties.filter(
          (property) => property._id !== action.payload
        );
      });
  },
});

export default propertySlice.reducer;
