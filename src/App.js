import './App.css';
import Home from './screens/Home'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './components/contextReducer.js';
function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/createuser" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
