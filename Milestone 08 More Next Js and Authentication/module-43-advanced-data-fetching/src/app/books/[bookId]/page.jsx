export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:3004/books");
    const books = await res.json();

    return books.map(book => ({ bookId: book.id }));
}

const BookDetailsPage = async ({ params }) => {
    const { bookId } = await params;

    const res = await fetch(`http://localhost:3004/books/${bookId}`);
    const { genre, author, year } = await res.json();

    return (
        <div>
            <h4>Book Details: {bookId}</h4>
            <h4>{author}</h4>
            <h4>{genre}</h4>
            <h4>{year}</h4>
        </div>
    );
};

export default BookDetailsPage;