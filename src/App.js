import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsThree from './pages/newsThree/NewsThree.component';
import NewsFour from './pages/newsFour/NewsFour.component';
import NewsFive from './pages/newsFive/NewsFive.component';
import NewsOne from './pages/newsOne/NewsOne.components';
import NewsTwo from './pages/newsTwo/NewsTwo.component';
import Home from './pages/homepage/Home.components';
import NavbarDiv from './components/navbar/Navbar.component';

function App() {
  return (
    <BrowserRouter>
        <Routes>  
            <Route path='/' element={<NavbarDiv />} >
              <Route index element={<Home />}  />
              <Route path='news-one' element={<NewsOne />}  />
              <Route path='news-two' element={<NewsTwo />} />
              <Route path='news-three' element={<NewsThree />} />
              <Route path='news-four' element={<NewsFour />} />
              <Route path='news-five' element={<NewsFive />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
