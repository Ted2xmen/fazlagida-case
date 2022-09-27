import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar';
import Details from './pages/Details';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


function App() {
  return (
    <div>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
