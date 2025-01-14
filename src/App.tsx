import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IndexPage from './pages/index';
import BlogPage from './pages/blog';
import ProjectsPage from './pages/projects';
import CVPage from './pages/cv';

function App() {
  return (
    <Router>
      <div>
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Antonio's Personal Website</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/blog" className="hover:underline">Blog</Link></li>
                <li><Link to="/projects" className="hover:underline">Projects</Link></li>
                <li><Link to="/cv" className="hover:underline">CV</Link></li>
              </ul>
            </nav>
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
