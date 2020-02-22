import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {deleteNews, getPosts} from "../../store/action/news";
import {Button, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

const News = props => {

    const getNews = async () => {
        await props.getNews()
    };

    const deleteNews = async id => {
        await props.deleteNews(id);
        await getNews();
    };

    useEffect(() => {
        getNews()
    }, []);
    return props.state.news && (
        <div>
            <ListGroup>
                {props.state.news.map(item => {
                    return (
                        <ListGroupItem className='d-flex align-items-center' key={item.id}>
                            {item.image &&
                            <img src={`http://localhost:8000/uploads/${item.image}`} className='img-thumbnail w-25' alt=""/>}
                            <div>
                                <h3>{item.title}</h3>
                                <div className='d-flex'>
                                    <p className='mr-4'>{item.date}</p>
                                    <Link to={'/news/'+item.id}>Read full post>></Link>
                                </div>
                                <Button onClick={() => deleteNews(item.id)}>Delete</Button>
                            </div>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>
    );
};

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    getNews: () => dispatch(getPosts()),
    deleteNews: id => dispatch(deleteNews(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(News);