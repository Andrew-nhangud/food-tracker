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
      <div className="form-filed">
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
        <div className="form-filed">
          <label htmlFor="category">CATEGORY</label>
          <select
            name="category"
            id="category"
            {...register("category", { required: "Required" })}
          >
            <option value="">Select a category</option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            <option value="drinks">Drinks</option>
            <option value="leftovers">Leftovers</option>
          </select>
          {errors.category && <p>{errors.category.message}</p>}
        </div>

        <div className="form-filed">
          <label htmlFor="quantity">QUANTITY</label>
          <input
            type="text"
            id="quantity"
            placeholder="1 bag"
            {...register("quantity", { required: "Required" })}
          />
          {errors.quantity && <p>{errors.quantity.message}</p>}
        </div>
      </div>

      <div className="form-filed">
        <label htmlFor="bestBefore">BEST BEFORE</label>
        <input
          type="date"
          id="bestBefore"
          {...register("bestBefore", { required: "Required" })}
        />
        {errors.bestBefore && <p>{errors.bestBefore.message}</p>}
      </div>

      <div>
        <button>Cancel</button>
        <button type="submit">Add item</button>
      </div>
    </form>
  );
};
