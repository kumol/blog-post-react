import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import {Link, Route} from "react-router-dom";
import NewPost from './NewPost/NewPost';
class Blog extends Component {
    
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-post">New post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts}></Route>
                <Route path="/new-post" exact component={NewPost}/>
{/*                 
                <section>
                    <FullPost id={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;