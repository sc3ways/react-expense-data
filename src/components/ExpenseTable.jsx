import {
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaRupeeSign,
} from "react-icons/fa";
import { options } from "../appData";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ExpenseTable({
  expensiveData,
  setExpensiveData,
  setFormData,
  setUpdatingDataId,
}) {
  const [contextMenuPosition, setContextMenuPosition] = useState({});
  const [rowId, setRowId] = useLocalStorage("rowId", "");
  const [filteredData, setQuery] = useFilter(
    expensiveData,
    (data) => data.category
  );
  const [sortCallback, setSortCallback] = useState(() => () => {});
  const totalAmount = filteredData.reduce(
    (accumulator, current) => accumulator + current.amount,
    0
  );
  // const filteredData = expensiveData.filter((expenseData) => {
  //   // console.log(expense.category);
  //   return expenseData.category.toLowerCase().includes(category);
  // });
  // console.log(totalAmount);
  return (
    <>
      <ContextMenu
        contextMenuPosition={contextMenuPosition}
        setContextMenuPosition={setContextMenuPosition}
        rowId={rowId}
        setExpensiveData={setExpensiveData}
        setFormData={setFormData}
        expensiveData={expensiveData}
        setUpdatingDataId={setUpdatingDataId}
      />
      <div
        className="expense-table bg-white rounded-xl p-3"
        onClick={() => {
          if (contextMenuPosition.left) {
            setContextMenuPosition({});
          }
        }}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-400 w-[26%]">
                <div className="flex justify-between items-center px-2">
                  <span>Title</span>
                  <span className="flex gap-1">
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSortCallback(
                          () => (a, b) => a.title.localeCompare(b.title)
                        );
                      }}
                    >
                      <FaLongArrowAltUp />
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSortCallback(
                          () => (a, b) => b.title.localeCompare(a.title)
                        );
                      }}
                    >
                      <FaLongArrowAltDown />
                    </span>
                  </span>
                </div>
              </th>
              <th className="border border-gray-400">
                <select
                  name="category"
                  onChange={(e) => setQuery(e.target.value.toLowerCase())}
                  className="w-full h-9 border-none bg-white text-gray-800 px-2"
                >
                  <option value="" className="font-normal">
                    All
                  </option>
                  {/* <option value="Dairy" className="font-normal">
                  Dairy
                </option>
                <option value="Fruits" className="font-normal">
                  Fruits
                </option>
                <option value="Vegetables" className="font-normal">
                  Vegetables
                </option>
                <option value="Clothes" className="font-normal">
                  Clothes
                </option>
                <option value="Snacks" className="font-normal">
                  Snacks
                </option> */}
                  {options.map((option, index) => (
                    <option
                      key={index + 1}
                      value={option}
                      className="font-normal"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </th>
              <th className="border border-gray-400 w-[27%]">
                <div className="flex justify-between items-center px-2">
                  <span>Amount</span>
                  <span className="flex gap-1">
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSortCallback(() => (a, b) => a.amount - b.amount);
                      }}
                    >
                      <FaLongArrowAltUp />
                    </span>
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSortCallback(() => (a, b) => b.amount - a.amount);
                      }}
                    >
                      <FaLongArrowAltDown />
                    </span>
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {filteredData.map(({ id, title, category, amount }) => (
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
          ))} */}
            {!filteredData.length ? (
              <tr>
                <td
                  colSpan="3"
                  className="border border-gray-400 p-2 text-center"
                >
                  No data available.
                </td>
              </tr>
            ) : (
              filteredData
                .sort(sortCallback)
                .map(({ id, title, category, amount }) => (
                  <tr
                    key={id}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      setContextMenuPosition({
                        left: e.clientX,
                        top: e.clientY,
                      });
                      setRowId(id);
                    }}
                  >
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
              <td className="border border-gray-400 text-center">
                <span
                  className="cursor-pointer text-sm text-blue-600"
                  onClick={() => setSortCallback(() => () => {})}
                >
                  Clear Sort
                </span>
              </td>
              <th className="border border-gray-400 p-2">
                <div className="flex items-center justify-end">
                  <FaRupeeSign className="font-normal text-[13px] opacity-70" />
                  <span>{totalAmount}</span>.00
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
