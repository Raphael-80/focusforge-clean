import ArticleCard from "./ArticleCard"

const dummyArticles = [
  {
    id: 1,
    title: "Benefits of Early Rising",
    author: "Focus Forge",
    category: "Productivity",
    image: "/sleep_img.jpg",
    date: "6 Jul, 2025",
    // excerpt: "Lorem ipsum dolor sit amet, consectetur notto elit sed do."
  },
  {
    id: 2,
    title: "The Transformative Power of Silence: A Game-Changer in Conflict and Relationships",
    author: "Focus Forge",
    category: "Emotional Intelligence",
    image: "/silence.jpg",
    date: "05 Jul, 2025",
    // excerpt: "Small consistent steps lead to major beakthroughs. Keep showing up.",
  },
  {
    id: 3,
    title: "Unlocking Unshakeable Confidence",
    author: "Focus Forge",
    category: "Self Development",
    image: "/believe.jpg",
    date: "06 Jul, 2025",
  },
  {
    id: 4,
    title: "The Multifaceted Self: On Masking Personality",
    author: "Focus Forge",
    category: "Self-awareness",
    image: "/mask.jpg",
    date: "19 Jul, 2025",
  }
]

const ArticleGrid = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      {dummyArticles.map((article) => (
        <ArticleCard key={article.id} article={article} />
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
