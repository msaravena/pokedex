import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import PokemonDetail from './pages/PokemonDetail';
import { useParams } from 'react-router-dom';

function App() {
  const {id} = useParams()
  return (
    <HashRouter>
      <div className="App">
    
        <Routes>
          <Route path="/" element={<Home />} />

        
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />            
            <Route path="/pokedex/:id" element={<PokemonDetail />} />

          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;