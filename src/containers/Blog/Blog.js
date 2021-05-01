import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import {NavLink, Route , Switch, Redirect} from "react-router-dom";
import NewPost from './NewPost/NewPost';
import FullPost from "./FullPost/FullPost"
class Blog extends Component {
    
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/post" exact>Home</NavLink></li>
                            <li><NavLink to="/new-post">New post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                    <Redirect from="/" to="/post"/>
                <Switch>
                    <Route path="/post" exact component={Posts}></Route>
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
                
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