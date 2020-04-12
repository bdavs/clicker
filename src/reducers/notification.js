import allNotifications from "../components/notifications/notifications.json";
const initialState = allNotifications;

export default function notification(state = initialState, action) {
  switch (action.type) {
    case "TRIGGER": {
      const notification = state.find((p) => p.id === action.id);
      const index = state.findIndex(p => p.id === action.id);
      return [
        ...state.slice(0, index),
        { ...notification, achieved: true },
        ...state.slice(index + 1),
      ];
    }
    default:
      return state;
  }
}
