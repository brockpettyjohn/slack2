const MESSAGE = 'MESSAGE';
const INPUT = 'INPUT';
const initialState = {
    input: '',
    message: []
}
export default function reducer(state = initialState, action) {
    console.log(state)
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
