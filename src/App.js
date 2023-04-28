
import './App.css';
import Create from './Create';
import { Routes, Route } from 'react-router-dom';
import Read from './Read';
import Edit from './Edit';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Read/>}></Route>
        <Route exact path='/create' element={<Create/>}></Route>
        <Route exact path='/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;