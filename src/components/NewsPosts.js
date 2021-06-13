import React from 'react';
import Comments from './Comments';
import '../App.css';
export default function NewsPosts({ posts }) {
    if (posts.length === 0) {
        return <div><h1>Loading...</h1></div>;
    }

    return (
        <div>
            <h1>News Top 10 Posts</h1>
            <ul>
                {posts.map((post,index) => (
                    <li className="posts" key={post.id}>
                        <a href={post.url}>{post.title}</a>
                        <h6>Comments</h6>
                        <Comments post={posts[index]}></Comments>
                    </li>
                ))}
            </ul>
        </div >
    );
}
