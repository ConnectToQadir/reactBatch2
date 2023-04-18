import Home from './pages/Home'
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// to provide data in all application -------------------------
import { createContext, useState } from 'react';
export var GlobalData = createContext()



function App() {


  var [user,setUser] = useState("AbdulQadir")
  var [them,setTheme] = useState('light')

  return (
    <div className="App">

      <GlobalData.Provider value={{user,setUser,them,setTheme}} >

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>

      </GlobalData.Provider>

    </div>
  );
}

export default App


