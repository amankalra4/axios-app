import React, { Component } from 'react';
import axios from 'axios'

class PostList extends Component {

    state = {
        post: [],
        errMsg: ''
    }

    componentDidMount() {
        // to access data from the API, we will use "then" and "catch" block
        // "then" accepts arrow function as an argument which gives access to the response.
        // if something goes wrong, that would be handled by the "catch" block.
        
        //axios.get("https://jsonplaceholder.typicode.com/posts")
        //.then( response => console.log (response) )
        //.catch( error => console.log (error) );

        // If we run the above code and we'll get in the console that the "response" 
        // contains the 100 objects that are specified in the API. So, we can then 
        // populate the 100 objects in the "post" state. So that we can render it to UI.

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then( response => this.setState({post: response.data}) )
        .catch( error => this.setState({errMsg: 'Error in retreiving data'}) );

    }

    render () {
        const { post, errMsg } = this.state;
        return (
            <div>
                List <hr/>
                {
                    post.length ?
                    post.map(data1 => <div key = {data1.id}>{data1.title}<hr/></div>) :
                    null
                }
                {errMsg ? <div>{errMsg}</div> : null}
                <hr/>
            </div>
        );
    }
}

export default PostList;