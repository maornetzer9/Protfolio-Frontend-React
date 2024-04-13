import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './layout/global.css'

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
