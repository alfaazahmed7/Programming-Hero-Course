const UserDetailPage = async ({ params }) => {
    const { userId } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    console.log(user);

    return (
        <div>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
};

export default UserDetailPage;