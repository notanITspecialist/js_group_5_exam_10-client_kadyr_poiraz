import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const GET_COMMENTS = 'GET_COMMENTS';

export const postsAction = data => ({type: GET_POSTS, data});
export const postAction = data => ({type: GET_POST, data});
export const getCommentsAction = data => ({type: GET_COMMENTS, data});

export const getPosts = () => async dispatch => {
    try {
        const resp = await axios.get('http://localhost:8000/news');
        dispatch(postsAction(resp.data));
    } catch (e) {
        console.log(e);
    }
};

export const getPost = id => async dispatch => {
    try {
        const resp = await axios.get('http://localhost:8000/news/'+id);
        dispatch(postAction(resp.data));
    } catch (e) {
        console.log(e);
    }
};

export const getComments = id => async dispatch => {
    try {
        const resp = await axios.get('http://localhost:8000/comments?news_id='+id);
        dispatch(getCommentsAction(resp.data));
    } catch (e) {
        console.log(e);
    }
};

export const addComment = data => async dispatch => {
    try {
        await axios.post('http://localhost:8000/comments', data);
    } catch (e) {
        console.log(e);
    }
};

export const deleteComment = id => async dispatch => {
    try {
        await axios.delete('http://localhost:8000/comments/'+id);
    } catch (e) {
        console.log(e);
    }
};

export const addNews = data => async dispatch => {
    try {
        await axios.post('http://localhost:8000/news', data);
    } catch (e) {
        console.log(e);
    }
};

export const deleteNews = id => async dispatch => {
    try {
        await axios.delete('http://localhost:8000/news/'+id);
    } catch (e) {
        console.log(e);
    }
};