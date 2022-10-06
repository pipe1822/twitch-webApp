import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';


const Home = lazy(() => import('./pages/Home'));
const ViewSearch = lazy(() => import('./pages/Search'));
const TopGames = lazy(() => import('./pages/TopGames'));
const Nomatch = lazy(() => import('./pages/Nomatch'));

export default function App() {

  return (
    <div className='App min-h-screen text-white flex items-center flex-col w-full'>
      <Router>
          <Navbar />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/search' element={<ViewSearch />} />
            <Route path='/games' element={<TopGames />} />
            <Route path="*" element={<Nomatch />}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}