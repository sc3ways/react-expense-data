import { BiPlusCircle, BiReset } from "react-icons/bi";

export default function ExpenseForm() {
  return (
    <div className="expense-form p-7 rounded-lg bg-white drop-shadow-2xl">
      <div className="input-group mb-4">
        <label htmlFor="title" className="font-semibold mb-1 block">
          Title
        </label>
        <input
          type="text"
          placeholder="Title"
          className="w-full h-11 border border-gray-300 rounded-sm bg-white text-gray-800 px-4"
        />
      </div>
      <div className="input-group mb-4">
        <label htmlFor="category" className="font-semibold mb-1 block">
          Category
        </label>
        <select
          name="category"
          id="category"
          className="w-full h-11 border border-gray-300 rounded-sm bg-white text-gray-800 px-4"
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Dairy">Dairy</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Grains">Grains</option>
          <option value="Snacks">Snacks</option>
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="amount" className="font-semibold mb-1 block">
          Amount
        </label>
        <input
          type="text"
          placeholder="Amount"
          className="w-full h-11 border border-gray-300 rounded-sm bg-white text-gray-800 px-4"
        />
      </div>
      <div className="input-group flex gap-3 mt-7">
        <button className="h-11 px-4 bg-blue-600 font-semibold text-white w-30 rounded-sm hover:bg-pink-600 flex items-center justify-center gap-2">
          Add <BiPlusCircle className="text-lg" />
        </button>
        <button className="h-11 px-4 bg-white font-semibold text-black border border-gray-400 w-30 rounded-sm hover:border-pink-600 hover:text-pink-600 flex items-center justify-center gap-2">
          Reset <BiReset />
        </button>
      </div>
    </div>
  );
}
