export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log("reducer received the following", action, state)
  switch(action.type){
    case "ADD_TODO":
      console.log(state, action)
      return {
        todos: state.todos.concat(action.payload.text)
      }
    default:
      return state;
  }
}
