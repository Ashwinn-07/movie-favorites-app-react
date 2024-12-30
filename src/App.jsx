import "./css/App.css";
import MovieCard from "./components/movieCard.jsx";
import Favorite from "./pages/Favorite.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import { MovieProvider } from "./contexts/MovieContext.jsx";
function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
