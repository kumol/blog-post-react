import React, {Component} from "react"
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";
class Posts extends Component {
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

    render(){
        const posts = this.state.posts.map(post=>{
            return <Post
                title={post.title}
                auther={post.auther}
                key={post.id}
                clicked={()=>this.selectedPostHandler(post.id)}
            />
        });
        return(
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;