import {GET_COMMENTS, GET_POST, GET_POSTS} from "../action/news";

const initialState = {
    news: null,
    new: null,
    comments: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                new: null,
                comments: null,
                news: action.data
            };
        case GET_POST:
            return {
                ...state,
                news: null,
                new: action.data,
            };
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.data
            };
        default:
            return state;
    }
};

export default reducer;