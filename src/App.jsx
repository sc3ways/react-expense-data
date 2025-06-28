import { useRef, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  const [expensiveData, setExpensiveData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState();

  const formRef = {
    titleRef: useRef(null),
    categoryRef: useRef(null),
    amountRef: useRef(null),
  };

  const validateForms = (formData) => {
    const errorsData = {};
    if (!formData.amount) {
      errorsData.amount = "Amount is required.";
      formRef.amountRef.current.focus();
    }
    if (isNaN(formData.amount)) {
      errorsData.amount = "Please enter amount in number.";
      formRef.amountRef.current.focus();
    }
    if (!formData.category) {
      errorsData.category = "Please select a category.";
      formRef.categoryRef.current.focus();
    }
    if (!formData.title) {
      errorsData.title = "Title is required.";
      formRef.titleRef.current.focus();
    }

    setErrors(errorsData);
    return errorsData;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      id: crypto.randomUUID(),
      [name]: value,
    }));
  };
  const handleExpenseAddBtn = (e) => {
    e.preventDefault();

    const validateRes = validateForms(formData);
    if (Object.keys(validateRes).length) return;

    setExpensiveData((prevData) => [...prevData, formData]);
    setSuccess("Data added successfully.");
    setErrors("");

    setFormData({
      title: "",
      category: "",
      amount: "",
    });
  };
  return (
    <div className="main-wrap">
      <div className="container lg:w-5xl sm:w-full mx-auto">
        <div className="lg:flex justify-center sm:block flex-wrap py-5 ">
          <div className="sec-title w-full mb-5 px-3">
            <h1 className="capitalize font-semibold">Track your expenses</h1>
          </div>
          <div className="lg:w-[50%] sm:w-[100%] xs:w-[100%] p-3">
            <ExpenseForm
              emsg={errors}
              handleOnChange={handleOnChange}
              formData={formData}
              handleExpenseAddBtn={handleExpenseAddBtn}
              formRef={formRef}
              success={success}
            />
          </div>
          <div className="lg:w-[50%] sm:w-[100%] p-3">
            <ExpenseTable expensiveData={expensiveData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
