// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Header from './Component/Header/Header';
import BlogFooter from './Component/BlogFooter/BlogFooter';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import BlogPost from './Pages/BlogPost';
import Login from './Pages/Login';
import Console from './Pages/Console'; // Import your console page component
import NoFound from './Pages/NoFound';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/console" element={<Console />} />{' '}
          <Route path="*" element={<NoFound />} />
        </Routes>
        <BlogFooter />
      </div>
    </Router>
  );
};

export default App;
