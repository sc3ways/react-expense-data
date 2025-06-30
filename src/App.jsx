import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { expenses } from "./appData";

function App() {
  const [expensiveData, setExpensiveData] = useState(expenses);

  return (
    <div className="main-wrap">
      <div className="container lg:w-5xl sm:w-full mx-auto">
        <div className="lg:flex justify-center sm:block flex-wrap py-5 ">
          <div className="sec-title w-full mb-5 px-3">
            <h1 className="capitalize font-semibold">Track your expenses</h1>
          </div>
          <div className="lg:w-[50%] sm:w-[100%] xs:w-[100%] p-3">
            <ExpenseForm setExpensiveData={setExpensiveData} />
          </div>
          <div className="lg:w-[50%] sm:w-[100%] p-3">
            <ExpenseTable
              expensiveData={expensiveData}
              setExpensiveData={setExpensiveData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
