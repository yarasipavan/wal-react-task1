import logo from "./logo.svg";
import "./App.css";
import Users from "./components/users/Users";
import UserStore from "./components/UserStore";
import Products from "./components/products/Products";
import ProductStore from "./components/ProductStore";

function App() {
  return (
    <div className="App">
      <UserStore>
        <Users />
      </UserStore>

      <ProductStore>
        <Products />
      </ProductStore>
    </div>
  );
}

export default App;
