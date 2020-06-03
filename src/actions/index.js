export const createTodo = (text) => {
    return {
        type: "CREATE_TODO",
        payload: text
    }
}