import React, { Component } from 'react';
import axios from "../../axios";
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        selectedPost:null
    }
    componentDidMount(){
        axios.get("/posts").then(response=>{
            let posts = response.data.slice(0,5);
            const updatedPost = posts.map(post=>{
                return{
                    ...post,
                    auther:"Max"
                }
            });
            this.setState({posts:updatedPost});
        });
    }
    selectedPostHandler(id){
        this.setState({selectedPost:id});
    }
    render () {
        const posts = this.state.posts.map(post=>{
            return <Post
                title={post.title}
                auther={post.auther}
                key={post.id}
                clicked={()=>this.selectedPostHandler(post.id)}
            />
        });
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;