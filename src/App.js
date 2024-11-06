import {Link, Route, BrowsersRouter as Router, Routes} from 'react-router-dom';
import { Cart, Category, Deteil, Home } from './pages';



function App() { 
  return (
    <Router>
      <header>
        <p><Link to={'/'}>Home page</Link></p>
        <p><Link to={'/category'}>Category page</Link></p>
        <p><Link to={'/cart'}>Cart page</Link></p>

      </header>
  
      <Routes>
        <Route  path='/home' element={<Home/>}/>
        <Route  path='/detail' element={<Deteil/>}/>
        <Route  path='/ctegory' element={<Category/>}/>
        <Route  path='/carts' element={<Cart/>}/>
      </Routes>
    
    </Router>
  );
}

export default App;