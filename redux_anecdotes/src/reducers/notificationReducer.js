import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { message: "", timeoutSecs: 5 },
  reducers: {
    setNotif(state, action) {
      state["message"] = action.payload;
    },
    setTimeout(state, action) {
      state["timeoutSecs"] = action.payload;
    },
  },
});

export const { setNotif, setTimeout } = notificationSlice.actions;

export const setNotification = (message, timeoutSecs = 5) => {
  console.log("message is:", message);
  return async (dispatch) => {
    dispatch(setNotif(message));
    dispatch(setTimeout(timeoutSecs));
  };
};

export default notificationSlice.reducer;
