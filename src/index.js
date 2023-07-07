import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Layout from './pages/Layout';
import Costume from './pages/Costume';
import Furniture from './pages/Furniture';
import Graphics from './pages/Graphics';
import Motion from './pages/Motion';
import NoPage from './pages/NoPage';
import Projects from './pages/Projects';
import ThreeD from './pages/ThreeD';
import Animate from './pages/Animate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<App />} />
          <Route path='furniture' element={<Furniture />} />
          <Route path='graphics' element={<Graphics />} />
          <Route path='3d' element={<ThreeD />} />
          <Route path='motion' element={<Motion />} />
          <Route path='costume' element={<Costume />} />
          <Route path='projects' element={<Projects />} />
          <Route path='animate' element={<Animate />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
