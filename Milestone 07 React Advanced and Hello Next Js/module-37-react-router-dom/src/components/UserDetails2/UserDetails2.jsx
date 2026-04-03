import React, { use } from 'react';

const UserDetails2 = ({ userPromise }) => {
    const { username, name } = use(userPromise);
    console.log(userPromise);

    return (
        <div>
            <p>Username: {username}</p>
            <h4>{name}</h4>
        </div>
    );
};

export default UserDetails2;