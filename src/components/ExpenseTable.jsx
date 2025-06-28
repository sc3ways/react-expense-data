import {
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaRupeeSign,
} from "react-icons/fa";

export default function ExpenseTable({ expensiveData }) {
  return (
    <div className="expense-table">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-400 w-[26%]">Title</th>
            <th className="border border-gray-400">
              <select
                name="category"
                id="category"
                className="w-full h-9 border-none bg-white text-gray-800 px-2"
              >
                <option value="All" hidden className="font-normal">
                  All
                </option>
                <option value="Dairy" className="font-normal">
                  Dairy
                </option>
                <option value="Fruits" className="font-normal">
                  Fruits
                </option>
                <option value="Vegetables" className="font-normal">
                  Vegetables
                </option>
                <option value="Grains" className="font-normal">
                  Grains
                </option>
                <option value="Snacks" className="font-normal">
                  Snacks
                </option>
              </select>
            </th>
            <th className="border border-gray-400 w-[27%]">
              <div className="flex justify-between items-center px-2">
                <span>Amount</span>
                <span className="flex gap-1">
                  <FaLongArrowAltUp />
                  <FaLongArrowAltDown />
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {!expensiveData.length ? (
            <tr>
              <td
                colSpan="3"
                className="border border-gray-400 p-2 text-center"
              >
                No data available.
              </td>
            </tr>
          ) : (
            expensiveData.map(({ id, title, category, amount }) => (
              <tr key={id}>
                <td className="border border-gray-400 p-2">{title}</td>
                <td className="border border-gray-400 p-2">{category}</td>
                <td className="border border-gray-400 p-2">
                  <div className="flex items-center justify-end">
                    <FaRupeeSign className="font-normal text-[13px] opacity-70" />
                    <span>{amount}</span>.00
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <th className="border border-gray-400 text-left p-2">Total</th>
            <th className="border border-gray-400"></th>
            <th className="border border-gray-400 p-2">
              <div className="flex items-center justify-end">
                <FaRupeeSign className="font-normal text-[13px] opacity-70" />
                <span>40</span>.00
              </div>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
