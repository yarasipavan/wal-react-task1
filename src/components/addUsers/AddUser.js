import { useForm } from "react-hook-form";
import { userContext } from "../userContext";
import { useContext } from "react";

function AddUser() {
  let [users, setUsers] = useContext(userContext);

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //function onSubmit
  const onSubmit = (userObj) => {
    setUsers([...users, userObj]);
    reset();
  };

  return (
    <div className="text-start">
      <div className="mt-4 mb-2">
        <h2>Add user</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-start border border-primary p-3 bg-dark text-light"
        style={{ borderRadius: "20px" }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="mb-1">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">Enter name</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="mb-1">
            Date Of Birth
          </label>
          <input
            type="date"
            className="form-control"
            {...register("dob", { required: true })}
          />
          {errors.dob?.type === "required" && (
            <p className="text-danger">Enter date of birth</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Email..."
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-danger">Enter email</p>
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

export default AddUser;
