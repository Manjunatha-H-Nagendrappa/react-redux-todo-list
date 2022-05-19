import { ADD_TODO, DELETE_TODO, UPDATE_TODO, COMPLETE_TODO } from "./actions";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              return { ...todo, todoName: action.payload.updateTodoName };
            }
            return todo;
          }),
        ],
      };

    case COMPLETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...action.payload, completed: !action.payload.completed }
              : todo
          ),
        ],
      };

    default:
      return state;
  }
};

export default reducer;
