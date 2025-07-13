import { useParams } from 'react-router-dom';

const dummyArticles = [
    {
        id: 1,
        title: "Override the digital divide with additional",
        image: "/article1.jpg",
        date: "20 Apr, 2025",
        author: "Raphael",
        excerpt: "Lorem ipsum dolor sit amet, consectetur notto elit sed do."
    },
    {
        id: 2,
        title: "Breaking limits: Start where you are",
        image: "/article3.jpg",
        date: "15 Jan, 2025",
        author: "Chizzy",
        excerpt: "Small consistent steps lead to major beakthroughs. Keep showing up.",
    },
    {
        id: 3,
        title: "Your story matters more than you think",
        image: "/article2.jpg",
        date: "02 Feb, 2025",
        author: "James Authur",
        excerpt: "Every experience adds to your power to inspire someone else."
    }
]

const ArticlePage = () => {

    const { id } = useParams();
    const article = dummyArticles.find((a) => a.id === id);

    if (!article) return <div className="p-6">Article not found.</div>;

    return (
        <div>
            <div className="max-w-4xl mx-auto px-4 py-12">
                <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded-lg mb-6" />
                <p className="text-sm text-gray-500">{article.date} • by {article.author}</p>
                <h1 className="text-3xl font-bold text-gray-800 my-4">{article.title}</h1>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{article.content}</p>
            </div>
        </div>
    )
}

export default ArticlePage