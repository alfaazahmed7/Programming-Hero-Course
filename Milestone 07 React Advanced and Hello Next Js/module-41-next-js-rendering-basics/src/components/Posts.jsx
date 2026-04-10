import React, { use } from 'react';

const Posts = ({ postsPromise }) => {
    const posts = use(postsPromise);
    console.log(posts);

    return (
        <div>
            <h4>Posts length: {posts.length}</h4>
        </div>
    );
};

export default Posts;