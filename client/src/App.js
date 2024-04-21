import React from 'react';
import {useParams, Routes, Route } from 'react-router-dom';

import './App.css';
// // import './card.css';
// import styles from '../../blog.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home/Home.page';
import { ErrorBoundary } from './components/handler/handler.component';
import Notfound from './components/handler/handler.component';
import Article from './pages/blog/Article';
import Blog from './pages/blog/Blog';
import BlogResult from './pages/blog/BlogResult';


function App() {
  return (
<div>
<Routes>



        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/blog/:slug/:_id' element={<Article />}></Route>
        <Route path='/blog/search/:keyword' element={<BlogResult />}></Route>
        <Route path="*" element={<Notfound />}></Route>

  

        </Routes>
     
        </div>
  );
}

export default App;
