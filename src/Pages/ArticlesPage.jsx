import ArticleCard from "../components/ArticleCard";
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

const ArticlesPage = () => {
    return (
        <>
            <Navbar solid />
            <section className="pt-24 px-4 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">All Articles</h1>
                <div className="grid md:grid-cols-3 gap-6">
                    {dummyArticles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ArticlesPage