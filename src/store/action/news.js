import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const GET_COMMENTS = 'GET_COMMENTS';

export const postsAction = data => ({type: GET_POSTS, data});
export const postAction = data => ({type: GET_POST, data});
export const getCommentsAction = data => ({type: GET_COMMENTS, data});

export const getPosts = () => async dispatch => {
    const resp = await axios.get('http://localhost:8000/news');
    dispatch(postsAction(resp.data));
};

export const getPost = id => async dispatch => {
    console.log('http://localhost:8000/news/'+id);
    const resp = await axios.get('http://localhost:8000/news/'+id);
    dispatch(postAction(resp.data));
};

export const getComments = id => async dispatch => {
    const resp = await axios.get('http://localhost:8000/comments?news_id='+id);
    dispatch(getCommentsAction(resp.data));
};

export const addComment = data => async dispatch => {
    await axios.post('http://localhost:8000/comments', data);
};

export const deleteComment = id => async dispatch => {
    await axios.delete('http://localhost:8000/comments/'+id);
};

export const addNews = data => async dispatch => {
    await axios.post('http://localhost:8000/news', data);
};

export const deleteNews = id => async dispatch => {
    console.log(id);
    await axios.delete('http://localhost:8000/news/'+id);
};