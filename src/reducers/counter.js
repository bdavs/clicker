const initialState = {
  totalClicks: 0,
  counterData: [],
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": {
      const counter = state.counterData.find((p) => p.id === action.id);
      const index = state.counterData.findIndex(p => p.id === action.id);
      return {
        ...state,
        totalClicks: state.totalClicks + (counter.level * counter.multiplier),
        counterData: [
          ...state.counterData.slice(0, index),
          { ...counter, clicks: counter.clicks + (counter.level * counter.multiplier) },
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
      if (state.totalClicks >= counter.cost){
        return {
          ...state,
          totalClicks: state.totalClicks - counter.cost,
          counterData: [
            ...state.counterData.slice(0, index),
            { ...counter, level: counter.level + 1 },
            ...state.counterData.slice(index + 1),
          ],
        };
      } else {
        return state;
      }
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
