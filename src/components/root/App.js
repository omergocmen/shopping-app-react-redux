import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from '../navi/Navi'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi/>
      <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/products" exact element={<Dashboard />} />
          <Route path="/cart" exact element={<CartDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
