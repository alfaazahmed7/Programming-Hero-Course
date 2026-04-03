import React, { use } from 'react';

const Users2 = ({ users2promise }) => {
    const users2 = use(users2promise);
    console.log(users2);

    return (
        <div>
            <h4>This is users 2 page</h4>
        </div>
    );
};

export default Users2;