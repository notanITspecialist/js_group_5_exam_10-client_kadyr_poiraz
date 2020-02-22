import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {addNews} from "../../store/action/news";
import {connect} from "react-redux";

const AddForm = props => {
    const initialState = {
        title: '',
        content: '',
        image: null
    };

    const [form, setForm] = useState(initialState);

    const inputChangeHandler = e => setForm({...form, [e.target.name]: e.target.value});
    const fileChangeHandler = e => setForm({...form, [e.target.name]: e.target.files[0]});

    const submitForm = async e => {
        e.preventDefault();

        const info = {...form};

        const data = new FormData();

        data.append('title', info.title);
        data.append('content', info.content);

        if(!info.image) {
            delete info.image;
        } else data.append('image', info.image);

        await props.addNews(data);
        props.history.replace('/');
    };

    return (
        <Form onSubmit={submitForm}>
            <FormGroup row>
                <Label for="Title" sm={2}>Title</Label>
                <Col sm={10}>
                    <Input type="text" name="title" id="Title" onChange={inputChangeHandler} required/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="content" sm={2}>Content</Label>
                <Col sm={10}>
                    <Input type="textarea" name="content" id="content" onChange={inputChangeHandler} required/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="image" sm={2}>Image</Label>
                <Col sm={10}>
                    <Input type="file" name="image" id="image" onChange={fileChangeHandler}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={10}>
                    <Button>Save</Button>
                </Col>
            </FormGroup>
        </Form>
    );
};

const mapDispatchToProps = dispatch => ({
    addNews: data => dispatch(addNews(data))
});

export default connect(null, mapDispatchToProps)(AddForm);