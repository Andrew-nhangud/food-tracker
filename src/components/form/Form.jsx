import "./Form.css";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-field">
        <label htmlFor="itemName">ITEM NAME</label>
        <input
          type="text"
          id="itemName"
          placeholder="Organic spinach"
          {...register("itemName", { required: "Required" })}
        />
        {errors.itemName && <p>{errors.itemName.message}</p>}
      </div>

      <div className="combined-fields">
        <div className="form-field">
          <label htmlFor="category">CATEGORY</label>
          <select
            name="category"
            id="category"
            className="resized-field category-field"
            {...register("category", { required: "Required" })}
          >
            <option value="">Select</option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            <option value="drinks">Drinks</option>
            <option value="leftovers">Leftovers</option>
          </select>
          {errors.category && <p>{errors.category.message}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="quantity">QUANTITY</label>
          <input
            type="text"
            id="quantity"
            placeholder="1 bag"
            className="resized-field"
            {...register("quantity", { required: "Required" })}
          />
          {errors.quantity && <p>{errors.quantity.message}</p>}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="bestBefore">BEST BEFORE</label>
        <input
          type="date"
          id="bestBefore"
          {...register("bestBefore", { required: "Required" })}
        />
        {errors.bestBefore && <p>{errors.bestBefore.message}</p>}
      </div>

      <button type="submit" className="submit-btn">
        Add item
      </button>
    </form>
  );
};
