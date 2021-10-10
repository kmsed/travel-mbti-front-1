import { ADD_PAGE } from './types'

const initialState = {
    count: 1 //api질문 페이지
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PAGE:
            return {
                ...state,
                count: state.count + 1
            };
        default: return state
    }
}

export default counterReducer