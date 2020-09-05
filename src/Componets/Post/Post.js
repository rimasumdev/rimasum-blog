import React, { useState, useEffect } from 'react';
import './Post.css'
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const Post = () => {
    const {id} = useParams();
    console.log(id);
    const [post,setPost] = useState([]);
    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(post => setPost(post))
    },[]);
    const {title,body} = post;
    const [comments,setComments] = useState([]);
    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/comments/?postId=1${id}`;
        fetch(url)
        .then(response => response.json())
        .then(comments => setComments(comments))
    },[]);

    const [users,setUsers] = useState([]);
    useEffect(() =>{
        const url ="https://randomuser.me/api/?results=15";
        fetch(url)
        .then(response => response.json())
        .then(data => setUsers(data.results))
    },[])

    return (
        <div className="post-container">
            <div className="img">
            <img src="https://source.unsplash.com/collection/190727" alt=""/>
            </div>
            <div>
            <h2>Post Name : {title}</h2>
            <p>{body}</p>
            </div>
            <h4 className="comment">Comments</h4>
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }      
            
        </div>
    );
};

export default Post;