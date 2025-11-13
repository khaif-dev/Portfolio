import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import MainPage from './Pages/MainPage';

const App = () => {
  return (
    <div>
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<MainPage/>}/>
            </Route>
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
