import Link from 'next/link';
import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
    title: 'Users',
    description: 'all the users data are here!',
}

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);

    return (
        <div className={roboto.className}>
            <div className='w-10/12 mx-auto'>
                <h4>This is the users page</h4>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        users.map(user => (
                            <div key={user.id}
                                className="card card-border bg-base-100">
                                <div className="card-body">
                                    <h2 className="card-title">{user.name}</h2>
                                    <h2 className="card-title">{user.email}</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-end">
                                        <Link href={`/users/${user.id}`}
                                            className="btn btn-primary">Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default UsersPage;