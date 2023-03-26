import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  Accepted: 0,
  completed: 0,
  pending: 0,
  user: "",
  businessName: "",
};
const Alertdata = createSlice({
  name: "alerts",
  initialState: initialState,
  reducers: {
    AcceptingUpdate(state) {
      state.Accepted = state.items
        .filter((item) => {
          return item.status === "accepted" && item.collectorId === state.user;
        })
        .reduce((initial, item) => {
          if (item.status === "accepted") {
            return initial + 1;
          }
          return initial;
        }, 0);
    },
    pendingUpdate(state) {
      state.pending = state.items.reduce((initial, item) => {
        if (item.status === "pending") {
          return initial + 1;
        }
        return initial;
      }, 0);
    },
    completedUpdate(state) {
      state.completed = state.items
        .filter((item) => {
          return item.status === "collected" && item.collectorId === state.user;
        })
        .reduce((initial, item) => {
          if (item.status === "collected") {
            return initial + 1;
          }
          return initial;
        }, 0);
    },
    update(state) {
      Alertdata.caseReducers.completedUpdate(state);
      Alertdata.caseReducers.AcceptingUpdate(state);
      Alertdata.caseReducers.pendingUpdate(state);
    },
    Accepted(state, action) {
      const actions = action.payload;
      const pending = state.items.find((item) => item._id === actions.id);
      console.log(pending);
      if (pending?.status === "pending") {
        pending.status = "accepted";
        Alertdata.caseReducers.update(state);
      }
    },
    completed(state, action) {
      const actions = action.payload;
      const pending = state.items.find((item) => item._id === actions.id);
      if (pending?.status === "accepted") {
        pending.status = "collected";
        pending.updatedAt = new Date().toISOString();
        Alertdata.caseReducers.update(state);
      }
    },
    addToState(state, action) {
      const actions = action.payload;
      // filters the array for new alerts while pushing all the alerts to items
      // eslint-disable-next-line
      const newItems = actions.data.filter((item) => {
        const found = state.items.find((item2) => item2._id === item._id);
        if (!found) {
          return item;
        }
      });
      state.items.push(...newItems);
      state.user = actions.id;
      state.businessName = actions.userName;
      Alertdata.caseReducers.update(state);
    },
  },
});
export const { Accepted, completed, addToState } = Alertdata.actions;
export default Alertdata;
