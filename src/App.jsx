import ArticleCard from './components/ArticleCard';
import ArticlesPage from './Pages/ArticlesPage';
import ArticleDetailPage from './Pages/ArticleDetailPage';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom'
import SubmitPage from './Pages/SubmitArticle';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import NewsletterPage from './Pages/NewsLetterPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/article/:id' element={<ArticleCard />} />
      <Route path='/articles' element={<ArticlesPage />} />
      <Route path='/submit' element={<SubmitPage />} />
      <Route path='/articles/:id' element={<ArticleDetailPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/subscribe' element={<NewsletterPage />} />
    </Routes>
  )
}

export default App