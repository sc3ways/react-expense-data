import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { expenses } from "./appData";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import useDarkMode from "./hooks/useDarkMode";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [formData, setFormData] = useLocalStorage("formData", {
    title: "",
    category: "",
    amount: "",
  });
  // const [updatingDataId, setUpdatingDataId] = useState("");
  const [updatingDataId, setUpdatingDataId] = useLocalStorage(
    "updatingDataId",
    ""
  );
  const [expensiveData, setExpensiveData] = useLocalStorage(
    "expenseData",
    expenses
  );

  const [theme, handleThemeMode] = useDarkMode();

  return (
    <div className={`main-wrap `}>
      <div className="container lg:w-5xl sm:w-full mx-auto dark:bg-gray-900">
        <div className="lg:flex justify-center sm:block flex-wrap py-5 ">
          <div className="sec-title flex justify-between items-center w-full mb-5 px-3">
            <h1 className="capitalize font-semibold">Track your expenses</h1>
            <button
              className="flex gap-1 items-center border border-gray-200 text-sm px-3 dark:bg-transparent py-2 rounded-md"
              onClick={handleThemeMode}
            >
              {theme === "dark" ? <BsSunFill /> : <BsMoonFill />}
              {/* <BsMoonFill /> */}
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
          <div className="lg:w-[50%] sm:w-[100%] xs:w-[100%] p-3">
            <ExpenseForm
              formData={formData}
              setFormData={setFormData}
              setExpensiveData={setExpensiveData}
              updatingDataId={updatingDataId}
              setUpdatingDataId={setUpdatingDataId}
            />
          </div>
          <div className="lg:w-[50%] sm:w-[100%] p-3">
            <ExpenseTable
              expensiveData={expensiveData}
              setFormData={setFormData}
              setExpensiveData={setExpensiveData}
              setUpdatingDataId={setUpdatingDataId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
