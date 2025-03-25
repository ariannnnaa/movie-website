import { Routes, Route } from "react-router-dom"; 
// components
import Header from './components/header/Header';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import Watch from './pages/Watch';
import Search from './pages/Search';
import Movies from './pages/Movies';
import MoviesGenres from './pages/MoviesGenres'; 
import Series from './pages/Series';
import SeriesGenres from './pages/SeriesGenres';
import Error from "./pages/Error";

function App() {
    return (
        <>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="watch/:id" element={<Watch/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:genre" element={<MoviesGenres/>}/>
        <Route path="series" element={<Series/>}/>
        <Route path="series/:genre" element={<SeriesGenres/>}/>
        <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer />
        </>
  )
}
 
export default App
