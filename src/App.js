import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }  />
          <Route path='/about' element={ <About /> }  />
          <Route path='/contact' element={ <Contact /> }  />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App


