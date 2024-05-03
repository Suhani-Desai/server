import { useState } from "react"; //for re-rendering, to keep track on the users information
export default function ExpenseForm() {  
  const categories = ["food", "rent", "travel"];

  const [form, setForm] = useState({
    expenseDate: "",
    title: "",
    amount: "",
    description: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="expenseDate">Expense Date : </label>
        {/* <br /> */}  
        <input
          type="date"
          name="expenseDate"
          value={form.expenseDate}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="title">Title : </label>
        {/* <br /> */}
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="amount">Amount : </label>
        {/* <br /> */}
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="description">Description : </label>
        {/* <br /> */}
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="category">Category : </label>
        {/* <br /> */}
        <select
          id="category"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

/*
In react
1. In components lexical scope will not work.
2. So instead we use props(as arguments).
3. And props are object datatype in which we can pass multiple values.
4. The state is data being tracked in the component.
5. And the props is data being passed to the component.
*/
