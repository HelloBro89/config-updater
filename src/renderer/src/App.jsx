import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </HashRouter>
  );
}
