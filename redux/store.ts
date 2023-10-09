"use client";

import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducers/authSlice";

export const store = configureStore({ reducer: { auth: AuthSlice } });
