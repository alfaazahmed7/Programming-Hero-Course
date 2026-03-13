import { use } from "react"
import Post from "./post";

export default function Posts({postPromise}) {
    const posts = use(postPromise);

    return (
        <div className="card">
            <h3>All posts are here {posts.length}</h3>

            {
                posts.map(post => <Post key={posts.id} post = {post}></Post>)
            }
        </div>
    );
}