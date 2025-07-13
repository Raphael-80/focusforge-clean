import ArticleCard from "./ArticleCard"

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

const ArticleGrid = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {dummyArticles.map((article) => (
            <ArticleCard key={article.id} article={article}/>
        ))}
    </section>
  )
}

export default ArticleGrid

// import ArticleCard from "./ArticleCard";

// const dummyArticles = [
//   {
//     id: 1,
//     title: "Override the digital divide with additional",
//     image: "/article1.jpg",
//     date: "20 Dec, 2022",
//     author: "Admin",
//     excerpt: "Lorem ipsum dolor sit amet, consectetur notto elit sed do.",
//   },
//   {
//     id: 2,
//     title: "Breaking limits: Start where you are",
//     image: "/article2.jpg",
//     date: "15 Jan, 2023",
//     author: "Mary N.",
//     excerpt: "Small consistent steps lead to major breakthroughs. Keep showing up.",
//   },
//   {
//     id: 3,
//     title: "Your story matters more than you think",
//     image: "/article3.jpg",
//     date: "02 Feb, 2023",
//     author: "James B.",
//     excerpt: "Every experience adds to your power to inspire someone else.",
//   },
// ];

// const ArticleGrid = () => {
//   return (
//     <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
//       {dummyArticles.map((article) => (
//         <ArticleCard key={article.id} article={article} />
//       ))}
//     </section>
//   );
// };

// export default ArticleGrid;
