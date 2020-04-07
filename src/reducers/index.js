
export default (state = {totalClicks:0, level:1, interval:0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
          totalClicks: state.totalClicks + state.level
        };
    case 'DECREMENT':
      return {
        ...state,
        totalClicks: state.totalClicks - state.level
      };
    case 'LEVELUP':
      return {
        ...state,
        level: state.level + 1
      };
    case 'INTERVAL':
      return {
        ...state,
        interval: state.interval + 1
      }
    default:
      return state
  }
}