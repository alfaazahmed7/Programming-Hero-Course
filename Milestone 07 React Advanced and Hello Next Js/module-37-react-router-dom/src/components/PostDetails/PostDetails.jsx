import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const {body, titile: title} = post;
    const navigate = useNavigate();

    return (
        <div>
            <h2>Post Details</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            <button
            onClick={() => navigate(-1)}
            >Go Back</button>
        </div>
    );
};

export default PostDetails;