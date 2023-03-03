import './App.css';
import NavbarDiv from './components/navbar/Navbar.component';
import Footer from './footer/Footer.component';
import Home from './pages/homepage/Home.components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsThree from './pages/newsThree/NewsThree.component';
import NewsFour from './pages/newsFour/NewsFour.component';
import NewsFive from './pages/newsFive/NewsFive.component';
import NewsOne from './pages/newsOne/NewsOne.components';
import NewsTwo from './pages/newsTwo/NewsTwo.component';

function App() {
  return (
    <BrowserRouter>
          <NavbarDiv />
        <Routes>  
          <Route path='/' element={<Home />} />
            <Route path='news/news-one' element={<NewsOne />}  />
            <Route path='news/news-two' element={<NewsTwo />} />
            <Route path='news/news-three' element={<NewsThree />} />
            <Route path='news/news-four' element={<NewsFour />} />
            <Route path='news/news-five' element={<NewsFive />} />
        </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;
