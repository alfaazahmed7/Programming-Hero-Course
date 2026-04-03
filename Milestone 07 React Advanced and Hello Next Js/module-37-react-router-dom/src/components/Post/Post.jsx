import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${id}`);
    }

    return (
        <div>
            <h2>Post Details are here</h2>
            <h4>{title}</h4>
            <Link to={`/posts/${id}`}>
                <button>Show Details</button>
            </Link>
            <button
                onClick={handleNavigate}
            >Details of:{id}</button>
        </div>
    );
};

export default Post;