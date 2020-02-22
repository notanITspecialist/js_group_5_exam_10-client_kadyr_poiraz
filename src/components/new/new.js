import React, {useEffect, useState} from 'react';
import {addComment, deleteComment, getComments, getPost} from "../../store/action/news";
import {connect} from "react-redux";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

const New = props => {

    const initialState = {
        author: '',
        comment: ''
    };

    const [form, setForm] = useState(initialState);

    const inputChangeHandler = e => setForm({...form, [e.target.name]: e.target.value});

    const getNew = async () => {
        await props.getNew(props.match.params.id);
        await props.getComments(props.match.params.id)
    };

    const deleteComment = async id => {
        await props.deleteComment(id);
        await props.getComments(props.match.params.id)
    };

    const submitForm = async e => {
        e.preventDefault();
        const info = {...form};

        if(info.author.length === 0) {
            delete info.author
        }

        info.id_news = parseInt(props.match.params.id);
        await props.addComment(info);
        await getNew();
    };

    useEffect(() => {
        getNew(props.match.params.id)
    }, []);

    return props.state.comments && (
        <div>
            <div className='border p-3 rounded mt-3'>
                <h1>{props.state.new.title}</h1>
                <p>{props.state.new.date}</p>
                <p>{props.state.new.content}</p>
            </div>
            <div>
                <h3>Comments</h3>
                {props.state.comments.map(comment => {
                    return (
                        <div className='border rounded' key={comment.id}>
                            <h5>{comment.author}</h5>
                            <p>{comment.comment}</p>
                            <Button onClick={() => deleteComment(comment.id)}>Delete</Button>
                        </div>
                    )
                })}
            </div>
            <div>
                <h3>Add comment</h3>
                <Form onSubmit={submitForm}>
                    <FormGroup row>
                        <Label for="author" sm={2}>Author</Label>
                        <Col sm={10}>
                            <Input type="text" name="author" id="author" onChange={inputChangeHandler}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="comment" sm={2}>Comment</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="comment" id="comment" onChange={inputChangeHandler} required/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={10}>
                            <Button>Add</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    getNew: id => dispatch(getPost(id)),
    getComments: id => dispatch(getComments(id)),
    deleteComment: id => dispatch(deleteComment(id)),
    addComment: data => dispatch(addComment(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(New);