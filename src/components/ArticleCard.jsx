import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.id}`} className="block">
      <div className="bg-white rounded-md shadow hover:shadow-lg transition overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
          <p className="text-sm text-gray-500 mb-2">
            {article.date} • {article.author}
          </p>
          <p className="text-gray-700 text-sm line-clamp-3">{article.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;