import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
    const { title, author, genre } = book;

    return (
        <div className="card bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{author}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="justify-end card-actions">
                    <Link
                        href={`/books/${book.id}`}
                        className="btn btn-primary">{genre}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;