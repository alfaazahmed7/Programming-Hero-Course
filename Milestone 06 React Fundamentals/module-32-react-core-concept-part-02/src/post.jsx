export default function Post({post}) {
    const {id, body} = post;
    return (
        <div className="card">
            <h4>Id: {id}</h4>
            <p>Body: {body}</p>
        </div>
    )
}