import { createSlice } from "@reduxjs/toolkit";

const Alertdata = createSlice({
  name: "alerts",
  initialState: {
    items: [
      {
        _id: "63f88824e5a2d57bc2f4b876",
        title: "Need to dispose some waste",
        description:
          "I have some waste at [my_location] that needs to be collected, it weighs about [weight] kg...",
        status: "pending",
        image:
          "https://storage.googleapis.com/fastrash-image-upload/66988091.jpg",
        location: "121.13, 32.1",
        quantity: 7,
        createdAt: "2023-02-24T09:49:24.256Z",
        updatedAt: "2023-02-24T09:49:24.256Z",
        __v: 0,
      },
    ],
    pending: 0,
    completed: 0,
  },
  reducers: {
    pendingUpdate(state) {
      let number = state.items.reduce((initial, item) => {
        if (item.status === "pending") {
          return initial + 1;
        }
        return initial;
      }, 0);
      state.pending = number;
    },
    completedUpdate(state) {
      let number = state.items.reduce((initial, item) => {
        if (item.status === "completed") {
          return initial + 1;
        }
        return initial;
      }, 0);
      state.completed = number;
    },
    pending(state, action) {
      const actions = action.payload;
      const pending = state.items.find((item) => item.id === actions.id);
      if (pending?.status === "pending") {
        pending.status = "Accepted";
        pending.updatedAt = new Date().toISOString();
      }
      Alertdata.caseReducers.pendingUpdate(state, action);
    },
    completed(state, action) {
      const actions = action.payload;
      const pending = state.items.find((item) => item.id === actions.id);
      if (pending?.status === "Accepted") {
        pending.status = "completed";
        pending.updatedAt = new Date().toISOString();
      }
      Alertdata.caseReducers.completedUpdate(state, action);
    },
    addToState(state, action) {
      const actions = action.payload;
      const isItemthere = state.items.filter(
        (item, i) => item.id !== actions[i].id
      );
      if (!isItemthere) {
        state.items.push(action);
      }
    },
  },
});

export const { pending, completed, addToState } = Alertdata.actions;
export default Alertdata;
