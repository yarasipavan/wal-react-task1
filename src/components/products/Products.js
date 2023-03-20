//import child components
import AddProduct from "../addProduct/AddProduct";
import ProductList from "../productList/ProductList";
function Products() {
  return (
    <div>
      <h1 className="text-center  p-3 mt-5">Products</h1>
      <div className="container ">
        <div className="row">
          <div className="col col-12 col-md-7   mb-4">
            <ProductList />
          </div>
          <div className="col col-12 col-md-4 offset-md-1 mb-4  ">
            <AddProduct />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
