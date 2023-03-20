import { useForm } from "react-hook-form";

//import productContext obj
import { productContext } from "../productContext";
import { useContext } from "react";

function AddProduct() {
  let [products, setProducts] = useContext(productContext);

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //function onSubmit
  const onSubmit = (productObj) => {
    setProducts([...products, productObj]);
    reset();
  };

  return (
    <div className="text-start ">
      <div className="mt-4 mb-2">
        <h2>Add product</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-dark text-light p-3"
        style={{ borderRadius: "15px" }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="mb-1">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">Enter product name</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="brand" className="mb-1">
            Brand
          </label>
          <input
            type="text"
            placeholder="brand..."
            className="form-control"
            {...register("brand", { required: true })}
          />
          {errors.brand?.type === "required" && (
            <p className="text-danger">Enter brand</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="mb-1">
            Price
          </label>
          <input
            type="number"
            placeholder="price..."
            className="form-control"
            {...register("price", { required: true })}
          />
          {errors.price?.type === "required" && (
            <p className="text-danger">Enter price</p>
          )}
        </div>
        <div>
          <button className="btn btn-outline-warning d-block mx-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
