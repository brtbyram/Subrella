import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    userId: string;
    name: string;
    email: string;
  } | null;
}

type User = {
  userId: string;
  name: string;
  email: string;
};

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; user: User  }>) => {
      state.user = action.payload.user
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
