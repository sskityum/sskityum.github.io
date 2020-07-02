import { ADD_LIKE, SUB_LIKE } from "../types"

const handlers = {
    [ADD_LIKE]: (state, {payload}) => state.index === payload ? state = state + 1 : state,
    [SUB_LIKE]: (state, {payload}) => state.index === payload ? state = state - 1 : state,
    DEFAULT: state => state
}

export const funnyPicturesReducer = (state, action) => {
    const handle = handlers.type || handlers.DEFAULT
    return handle(state, action)
}