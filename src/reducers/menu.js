export default function menu(state = "main", action) {
  switch (action.type) {
    case "SET_MAIN": 
      return "main"
    case "SET_SETTINGS": 
      return "settings"
    case "SET_ACHIEVEMENTS": 
      return "achievements"
    default:
      return state;
  }
}
