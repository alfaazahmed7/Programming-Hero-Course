import React from 'react';

const getPosts = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        return res.json();
    }
    catch (err) {
        throw new Error("Failed to fetch posts");
    }
}

// const getPosts = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if (!res.ok) {
//         throw new Error("Failed to fetch posts");
//     }
// }

const PostsPage = async () => {
    const posts = await getPosts();

    return (
        <div>
            <h2>This is the post page: {posts.length}</h2>
        </div>
    );
};

export default PostsPage;