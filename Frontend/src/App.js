import React from "react";
import './App.css';
import { BrowserRouter ,Routes ,Route  } from 'react-router-dom';
import Auth from "./Auth"
import HomePage from "./HomePage";
import ExpensePage from './component/ExpensePage';
import StatesPage from './component/StatesPage';
import DetialPage from './component/DetialPage';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
       <BrowserRouter>
        <Routes>
         <Route path="/" element={<Auth />} />
         <Route path="/HomePage" element={<HomePage />} />
         <Route path="/ExpensePage" element={<ExpensePage />} />
         <Route path="/StatesPage" element={<StatesPage />} />
         <Route path="/DetialPage" element={<DetialPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

