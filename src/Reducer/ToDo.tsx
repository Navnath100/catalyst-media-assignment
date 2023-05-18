export default function (state: any, action: any) {
    switch (action.type) {
        case 'addTodo':
            return { ...state, todos: [...state.todos, { text: action.payload, completed: false }] };
        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map((todo: any, index: number) => {
                    if (index === action.payload) {
                        return { ...todo, completed: !todo.completed };
                    }
                    return todo;
                }),
            };
        case 'setFilter':
            return { ...state, filter: action.payload };
        default:
            throw new Error();
    }
}