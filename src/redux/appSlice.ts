import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isDarkTheme: boolean;
    isSidebarOpen: boolean;
    modal: {
        isOpen: boolean;
        content: string 
    }
}

const initialState: AppState = {
  isDarkTheme: false,
  isSidebarOpen: false,
    modal: {
        isOpen: false,
        content: "",
    },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    openModal: (state, action: PayloadAction<{ isOpen: boolean; content: string }>) => {
        state.modal.isOpen = action.payload.isOpen;
        state.modal.content = action.payload.content;
        },
    closeModal: (state) => {
        state.modal.isOpen = false;
        state.modal.content = "";
    },
  },
});

export const { toggleTheme, toggleSidebar, openModal, closeModal } = appSlice.actions;
export default appSlice.reducer;
