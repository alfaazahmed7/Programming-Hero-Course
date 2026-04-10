'use client'
import Posts from "@/components/Posts";
import { Suspense } from "react";

const PostsPage = () => {
    const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json());

    return (
        <div>
            <Suspense fallback={<h4>Loading posts...</h4>}>
                <Posts postsPromise={postsPromise} />
            </Suspense>
        </div>
    );
};

export default PostsPage;