const initialState = {
  totalClicks: 0,
  counterData: [{ id: 0, name: "first", level: 1, interval: 0 }],
  // level: 1,
  // interval: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        totalClicks: state.totalClicks + 1,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        totalClicks: state.totalClicks - 1,
      };
    }
    case "LEVELUP": {
      console.log(action);
      console.log(action.id);
      const counter = state.counterData.find((p) => p.id === action.id);
      return {
        ...state,
        counterData: [
          ...state.counterData.filter((p) => p !== counter),
          { ...counter, level: counter.level + 1 },
        ],
        // level: state.level + 1,
      };
    }
    case "INTERVAL": {
      const counter = state.counterData.find((p) => p.id === action.id);
      return {
        ...state,
        // interval: state.interval + 1,
        counterData: [
          ...state.counterData.filter((p) => p !== counter),
          { ...counter, interval: counter.interval + 1 },
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

// const posts = (state = null, action) => {
//   const post = state.posts.find(p => p.id === action.payload.id);
//   switch(action.type) {
//     case "PUBLISH_POST":
//       return { ...state, posts: [ ...state.posts.filter(p => p !== post), { ...post, status: 1 } ] };
//     case "UNPUBLISH_POST":
//       return { ...state, posts: [ ...state.posts.filter(p => p !== post), { ...post, status: 0 } ] };
//     default:
//       return state;
//   }
// }
