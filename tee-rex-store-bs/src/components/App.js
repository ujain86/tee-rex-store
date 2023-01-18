import Home from "./Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter> */}
      <Home />
      
    </div>
  );
}

export default App;
