export default (state = {value:0n, level:1, interval:1}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
          value: state.value + state.level
        };
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - state.level
      };
    case 'LEVELUP':
      return {
        ...state,
        level: state.level + 1
      };
    case 'INTERVAL':
      return {
        ...state,
        interval: state.interval +1
      }
    default:
      return state
  }
}