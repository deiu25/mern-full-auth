import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import authService from "./authService";

const initialState = {
  isLoggedIn: false,
  user: null,
  users: [],
  twoFactor: false,
  isErrored: false,
  isSuccessful: false,
  isLoading: false,
  message: "",
};

//Register user
export const registerUser = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI ) => {
        try {
            return await authService.register(userData);
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            return thunkAPI.rejectWithValue({ message });
        }
    }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET(state) {
      state.twoFactor = false;
      state.isErrored = false;
      state.isSuccessful = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        }
    );
    builder.addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessful = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success("Registration successful");
        }
    );
    builder.addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isErrored = true;
        state.message = action.payload;
        state.user = null;
        toast.error(action.payload);
        }
    );
    },
});

export const {RESET} = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
