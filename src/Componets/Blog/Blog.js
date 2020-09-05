import React, { useState, useEffect } from 'react';
import './Blog.css';
import Content from '../BlogContent/Content';


const Blog = () => {
    const [post,setPost] = useState([]);
    useEffect(() =>{
        const url ='https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response => response.json())
        .then(post => setPost(post))
    },[]);
        return (
            <div className="card">
                {
                    post.map(post => <Content post={post}></Content>)
                }
            </div>
          
        );
};

export default Blog;