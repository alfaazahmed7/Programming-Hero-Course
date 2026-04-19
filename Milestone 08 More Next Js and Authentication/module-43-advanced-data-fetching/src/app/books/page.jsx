import BookCard from "@/components/BookCard";

const BooksPage = async () => {
    const res = await fetch("http://localhost:3004/books");
    const books = await res.json();

    return (
        <div>
            <h4>Books: {books.length}</h4>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books.map(book => <BookCard
                        key={book.id}
                        book={book}
                    />)
                }
            </div>
        </div>
    );
};

export default BooksPage;