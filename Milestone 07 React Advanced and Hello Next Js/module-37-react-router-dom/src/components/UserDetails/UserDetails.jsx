import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {userId} = useParams();
    console.log(userId);

    const {name, website} = user;
    
    return (
        <div>
            <h2>User details are here</h2>
            <h4>Name: {name}</h4>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;