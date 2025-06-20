import {createSlice,PayloadAction} from "@reduxjs/toolkit";

export  interface initialStateTypes{
    isSidebarCollapsed:boolean;
    isDarkMode: boolean;
    isAuthenticated:boolean;
}

const initialState: initialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false,
    isAuthenticated: false
};


export const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        },
        setIsAuthenticated: (state,action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        }
    }
});

export const {setIsSidebarCollapsed,setIsDarkMode,setIsAuthenticated} = globalSlice.actions;
export default globalSlice.reducer;