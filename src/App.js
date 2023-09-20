import './index.css'; 
import Home from "./pages/Home";
import FavoritePersonality from "./pages/FavoritePersonality";
import FavoriteCity from "./pages/FavoriteCity";
import FavoriteSpot from "./pages/FavoriteSpot";
import Contact from "./pages/Contact";
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
    
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favoritePersonality" element={<FavoritePersonality />} />
        <Route path="favoriteCity" element={<FavoriteCity />} />
        <Route path="favoriteSpot" element={<FavoriteSpot />} />
        <Route path="contact" element={<Contact />} />

    
      </Routes>
     
    
        </div>
    
   
  );
}

export default App;

