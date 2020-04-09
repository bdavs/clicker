const initialState = {
  totalClicks: 0,
  counterData: [],
  // level: 1,
  // interval: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      const counter = state.counterData.find((p) => p.id === action.id);
      const index = state.counterData.findIndex(p => p.id === action.id);
      return {
        ...state,
        totalClicks: state.totalClicks + counter.level,
        counterData: [
          ...state.counterData.slice(0, index),
          { ...counter, clicks: counter.clicks + counter.level },
          ...state.counterData.slice(index + 1),
        ],
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        totalClicks: state.totalClicks - 1,
      };
    }
    case "LEVELUP": {
      const counter = state.counterData.find((p) => p.id === action.id);
      const index = state.counterData.findIndex(p => p.id === action.id);
      return {
        ...state,
        counterData: [
          ...state.counterData.slice(0, index),
          { ...counter, level: counter.level + 1 },
          ...state.counterData.slice(index + 1),
        ],
      };
    }
    case "INTERVAL": {
      const counter = state.counterData.find((p) => p.id === action.id);
      const index = state.counterData.findIndex(p => p.id === action.id);

      return {
        ...state,
        counterData: [
          ...state.counterData.slice(0, index),
          { ...counter, interval: counter.interval + 1 },
          ...state.counterData.slice(index + 1),

        ],
      };
    }
    case "NEW_COUNTER": {
      return {
        ...state,
        counterData: [
          ...state.counterData,
          action.newCounter,
        ],
      };
    }
    default:
      return state;
  }
};
