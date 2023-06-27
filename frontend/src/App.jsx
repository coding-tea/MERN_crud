//dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//css
import './app.css';

//commponents
import Menu from './components/Menu';
import Index from './components/Index';
import Show from './components/Show';
import Create from './components/Create';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />}>
          <Route path='/' element={<Index />} />
          <Route path='/show/:id' element={<Show />} />
          <Route path='/create' element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
