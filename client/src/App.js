import './App.css';
import Card from './components/Card/Card';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Trending from './components/Trending/Trending';


function App() {
  return (
    <div>
       <Navbar />
       <Home />
       <Card />
       <Trending />
    </div>
  );
}

export default App;
