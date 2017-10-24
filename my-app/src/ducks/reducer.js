const MESSAGE = 'MESSAGE';
const INPUT = 'INPUT';
const SEARCH = 'SEARCH'
const initialState = {
    input: '',
    message: [],
    search: ''
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case INPUT:
            return Object.assign({}, state, { input: action.payload });
        case MESSAGE:
            return Object.assign({}, state, { message: state.message.concat(action.payload), input: '' });
        default: return state;
    }
}

export function handleInputChange(input) {
    return {
        payload: input,
        type: INPUT
    }
}

export function handleClick(newMessage) {
    return {
        payload: newMessage,
        type: MESSAGE
    }
}
