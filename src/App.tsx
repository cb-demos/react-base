import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components';
import { Home, About } from '@/pages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
