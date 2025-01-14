import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/index';
import BlogPage from './pages/blog';
import ProjectsPage from './pages/projects';
import CVPage from './pages/cv';

function App() {
  return (
    <Router>
      <div>
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Antonio's Personal Website</h1>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/cv" element={<CVPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
