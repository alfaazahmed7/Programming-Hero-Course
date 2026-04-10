const blogs = [
    {
        id: 1,
        title: "Understanding React Basics",
        author: "John Doe",
        date: "2026-04-01",
        category: "Programming",
        readTime: "5 min read",
        description: "Learn the fundamentals of React including components, props, and state management.",
        coverImage: "https://example.com/react-basics.jpg"
    },
    {
        id: 2,
        title: "Mastering Tailwind CSS",
        author: "Sarah Khan",
        date: "2026-03-28",
        category: "Web Design",
        readTime: "6 min read",
        description: "A complete guide to building modern and responsive UI using Tailwind CSS.",
        coverImage: "https://example.com/tailwind.jpg"
    },
    {
        id: 3,
        title: "JavaScript ES6 Features You Should Know",
        author: "David Smith",
        date: "2026-03-20",
        category: "JavaScript",
        readTime: "7 min read",
        description: "Explore important ES6 features like arrow functions, destructuring, and modules.",
        coverImage: "https://example.com/es6.jpg"
    },
    {
        id: 4,
        title: "How to Become a Better Programmer",
        author: "Alfaaz Ahmed",
        date: "2026-03-15",
        category: "Career",
        readTime: "8 min read",
        description: "Practical tips and mindset shifts to improve your coding skills and problem-solving ability.",
        coverImage: "https://example.com/programmer.jpg"
    }
];

const BlogDetailPage = async ({ params }) => {
    const { blogId } = await params;
    const blog = blogs.find(blog => blog.id === parseInt(blogId));
    console.log("show me params", blog);

    return (
        <div>
            <h4 className="text-2xl">Blog details are coming soon...</h4>
            {blog &&
                <div>
                    <p>{blog.description}</p>
                </div>
            }
        </div>
    );
};

export default BlogDetailPage;