"use client";
import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {},
});

export default AuthSlice.reducer;
