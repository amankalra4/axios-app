import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {

    state = {
        userID: '',
        title: '',
        body: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    click = (event) => {
        event.preventDefault();
        console.log(this.state);
        // post takes 2 arguments: 1. url and 2. data that has to be sent
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    render () {
        const {userID, title, body} = this.state;
        return (
            <div>
                <form onSubmit = {this.click} >
                <input type = 'text' name = 'userID' value = {userID} onChange = {this.handleChange} /><br/>
                <input type = 'text' name = 'title' value = {title} onChange = {this.handleChange} /><br/>
                <input type = 'text' name = 'body' value = {body} onChange = {this.handleChange} /><br/>
                <button type = 'submit'>Click Me</button>
                </form>
            </div>
        );
    }
}

export default PostForm;