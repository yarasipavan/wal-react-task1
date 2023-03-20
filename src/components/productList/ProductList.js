import { useContext } from "react";

//import createContextv obj
import { productContext } from "../productContext";

function ProductList() {
  let [products, setProducts] = useContext(productContext);
  return (
    <div className="text-start">
      <div className="mt-4 mb-2">
        <h2>Products List</h2>
      </div>
      <div>
        {products.length === 0 ? (
          <h4 className="text-danger ms-4 ">No Products </h4>
        ) : (
          <table className="text-center table table-striped w-100">
            <thead className="bg-dark   text-light fw-bold">
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((productObj, index) => (
                <tr key={index}>
                  <td>{productObj.name}</td>
                  <td>{productObj.brand}</td>
                  <td>{productObj.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ProductList;
