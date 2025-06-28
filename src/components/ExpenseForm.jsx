import { BiErrorCircle, BiPlusCircle, BiReset } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

export default function ExpenseForm({
  formData,
  handleOnChange,
  handleExpenseAddBtn,
  emsg,
  formRef,
  success,
}) {
  return (
    <div className="expense-form p-7 rounded-lg bg-white drop-shadow-xl">
      <div className="input-group mb-4 relative">
        <label htmlFor="title" className="font-semibold mb-1 block">
          Title
        </label>
        <input
          type="text"
          ref={formRef.titleRef}
          name="title"
          value={formData.title}
          onChange={handleOnChange}
          placeholder="Title"
          className="w-full h-11 border border-gray-300 rounded-sm bg-white text-gray-800 px-4 focus:outline-none focus:border-red-500"
        />
        {emsg.title && (
          <p className="text-red-500 text-sm flex gap-1 items-center absolute bottom-3 right-4">
            <BiErrorCircle />
            {emsg.title}
          </p>
        )}
      </div>
      <div className="input-group mb-4 relative">
        <label htmlFor="category" className="font-semibold mb-1 block">
          Category
        </label>
        <select
          name="category"
          id="category"
          ref={formRef.categoryRef}
          value={formData.category}
          onChange={handleOnChange}
          className="w-full h-11 border border-gray-300 rounded-sm bg-white text-gray-800 px-4 focus:outline-none focus:border-red-500"
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
        {emsg.category && (
          <p className="text-red-500 text-sm flex gap-1 items-center absolute bottom-3 right-4">
            <BiErrorCircle />
            {emsg.category}
          </p>
        )}
      </div>
      <div className="input-group relative">
        <label htmlFor="amount" className="font-semibold mb-1 block">
          Amount
        </label>
        <input
          type="text"
          ref={formRef.amountRef}
          placeholder="Amount"
          name="amount"
          value={formData.amount}
          onChange={handleOnChange}
          className="w-full h-11 border border-gray-300 rounded-sm bg-white text-gray-800 px-4 focus:outline-none focus:border-red-500"
        />
        {emsg.amount && (
          <p className="text-red-500 text-sm flex gap-1 items-center absolute bottom-3 right-4">
            <BiErrorCircle />
            {emsg.amount}
          </p>
        )}
      </div>

      <div className="input-group flex gap-3 mt-5">
        <button
          onClick={handleExpenseAddBtn}
          className="h-11 px-4 bg-blue-600 font-semibold text-white w-30 rounded-sm hover:bg-pink-600 flex items-center justify-center gap-2"
        >
          Add <BiPlusCircle className="text-lg" />
        </button>
        <button className="h-11 px-4 bg-white font-semibold text-black border border-gray-400 w-30 rounded-sm hover:border-pink-600 hover:text-pink-600 flex items-center justify-center gap-2">
          Reset <BiReset />
        </button>
        {success && (
          <p className="text-green-600 text-sm flex gap-1 items-center ">
            <TiTick />
            {success}
          </p>
        )}
      </div>
    </div>
  );
}
