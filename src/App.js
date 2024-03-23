import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';
import Exchanges from './components/Exchanges';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
           <BrowserRouter>
           <Header />
           <Routes>
            <Route path='/' element= {<Home />}></Route>
            <Route path='/coins' element= {<Coins />}></Route>
            <Route path='/coin/:id' element= {<CoinDetails />}></Route>
            <Route path='/exchanges' element= {<Exchanges />}></Route>
            </Routes>

            <Footer />
           </BrowserRouter>
    </div>
  );
}

export default App;
