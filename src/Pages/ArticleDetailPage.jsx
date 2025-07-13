import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const dummyArticles = [
    {
        id: "1",
        title: "Override the digital divide with additional",
        image: "/article1.jpg",
        date: "20 Dec, 2022",
        author: "Admin",
        category: "Technology",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula fermentum sapien, nec pulvinar justo pharetra in. Phasellus tempor, massa nec imperdiet bibendum, orci mi dignissim orci, in varius est risus vel lorem.",
    },
    {
        id: "2",
        title: "Breaking limits: Start where you are",
        image: "/article3.jpg",
        date: "15 Jan, 2023",
        author: "Mary N.",
        category: "Mindset",
        content:
            "Start where you are. Use what you have. Do what you can. The road is built as you walk it. You don’t need everything to begin—just the courage to start.",
    },
    {
        id: "3",
        title: "Your story matters more than you think",
        image: "/article2.jpg",
        date: "02 Feb, 2023",
        author: "James B.",
        category: "Mindset",
        content:
            "Every chapter of your life, no matter how small, may inspire someone else to turn the page in theirs. Share your journey. Someone is waiting to hear it.",
    },
    {
        id: "4",
        title: "The power of AI",
        image: "/article1.jpg",
        date: "04 Jan, 2025",
        author: "Raphael Onuoha",
        category: "Technology",
        content: "AI is taking over almost everything humanity has built so far. From teaching to building softwares. It comes with it's pros and cons. Which leads us to the question everyone is asking, `Is AI our friend or foe!?`"
    },
    {
        id: "5",
        title: "The power of the mind.",
        image: "/article3.jpg",
        date: "12 July, 2024",
        author: "David John",
        category: "Mindset",
        content: "Every chapter of your life, no matter how small, may inspire someone else to turn the page in theirs. Share your journey. Someone is waiting to hear it.",
    }
];

const ArticleDetailPage = () => {
    const { id } = useParams();
    const article = dummyArticles.find((item) => item.id === id);

    if (!article) {
        return (
            <div className="pt-24 text-center text-red-600">
                <h1>Article not found.</h1>
            </div>
        );
    }

    return (
        <>
            <Navbar solid />
            <main className="pt-24 px-4 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                <p className="text-gray-500 text-sm mb-2">
                    By {article.author} • {article.date}
                </p>
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-100 object-cover rounded-md mb-6"
                />
                <p className="text-lg leading-8 text-gray-800 whitespace-pre-line">
                    {article.content}
                </p>
            </main>

            {/* Related Articles */}
            <section className="mt-16">
                <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
                <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                    {dummyArticles
                        .filter(
                            (item) =>
                                item.category === article.category && item.id !== article.id
                        )
                        .map((related) => (
                            <Link
                                key={related.id}
                                to={`/articles/${related.id}`}
                                className="min-w-[280px] bg-white shadow rounded-md p-4 shrink-0 hover:shadow-lg transition"
                            >
                                <h3 className="text-lg font-bold mb-2">{related.title}</h3>
                                <p className="text-sm text-gray-500 mb-1">{related.author} • {related.date}</p>
                                <p className="text-sm text-gray-700 line-clamp-2">{related.content}</p>
                                <span className="text-red-600 text-sm font-medium inline-block mt-2">Read more →</span>
                            </Link>
                        ))}
                </div>
            </section>


            <Footer />
        </>
    );
};

export default ArticleDetailPage;
