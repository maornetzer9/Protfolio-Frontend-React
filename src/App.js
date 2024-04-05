import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './layout/home.css'

function App() {
  return (
    <BrowserRouter>
    
        <Routes>

            <Route  path='/' element={ <Home /> }/>

        </Routes>

    </BrowserRouter>
  );
}

export default App;
