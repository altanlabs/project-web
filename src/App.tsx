import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import BlogPage from './pages/blog';
import ProjectsPage from './pages/projects';
import CVPage from './pages/cv';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </Router>
  );
}

export default App;
