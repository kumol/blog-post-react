import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    state={
        loadedPost:null
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        if(id){
            axios.get("/posts/"+id).then(response=>{
                this.setState({loadedPost:response.data});
            })
        }
    }
    componentDidUpdate(){
        if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
            axios.get("/posts/"+this.props.id).then(response=>{
                this.setState({loadedPost:response.data});
            });
        }
    }
    deletePost = () =>{
        console.log(this.props.id);
        axios.delete("/posts/"+this.props.id)
            .then(response=>{
                console.log(response);
            });
    }
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.props.id) {
            post = <p style={{textAlign:'center'}}>Loading the Post!</p>;
        }
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePost} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;