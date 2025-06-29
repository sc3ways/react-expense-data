import { BiPlusCircle, BiReset } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import Input from "./Input";
import Select from "./Select";
import { useRef, useState } from "react";
import { validateConfig } from "../rules/ValidateRules";
import { options } from "../appData";

export default function ExpenseForm({ setExpensiveData }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState();

  const formRefs = {
    title: useRef(null),
    category: useRef(null),
    amount: useRef(null),
  };

  const validateForms = (formData, formRefs) => {
    const errorsData = {};
    let firstInvalidField = null;

    Object.entries(formData).forEach(([key, value]) => {
      const rules = validateConfig[key];

      if (rules && Array.isArray(rules)) {
        for (const rule of rules) {
          if (rule.required && !value.trim()) {
            errorsData[key] = rule.message;
            if (!firstInvalidField) firstInvalidField = key;
            break;
          }
          if (rule.minLength && value.length < rule.minLength) {
            errorsData[key] = rule.message;
            if (!firstInvalidField) firstInvalidField = key;
            break;
          }
          if (rule.isNaN && isNaN(value)) {
            errorsData[key] = rule.message;
            if (!firstInvalidField) firstInvalidField = key;
            break;
          }
        }
      }
    });

    setErrors(errorsData);

    if (firstInvalidField && formRefs[firstInvalidField]?.current) {
      formRefs[firstInvalidField].current.focus();
    }
    return errorsData;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,

      [name]: value,
    }));
    setErrors("");
    setSuccess("");
  };
  const handleExpenseAddBtn = (e) => {
    e.preventDefault();

    const validateRes = validateForms(formData, formRefs);
    if (Object.keys(validateRes).length > 0) return;

    const entry = {
      id: crypto.randomUUID(),
      ...formData,
    };

    setExpensiveData((prevData) => [...prevData, entry]);
    setSuccess("Data added successfully.");
    setErrors("");

    setFormData({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleReset = () => {
    setFormData({
      title: "",
      category: "",
      amount: "",
    });
    setErrors({});
    setSuccess("");
  };
  return (
    <div className="expense-form p-7 rounded-lg bg-white drop-shadow-xl">
      <Input
        label="Title"
        name="title"
        value={formData.title}
        handleOnChange={handleOnChange}
        formRef={formRefs.title}
        placeholder="Enter expense title"
        error={errors.title}
      />
      <Select
        label="Category"
        name="category"
        handleOnChange={handleOnChange}
        formRef={formRefs.category}
        defaultOpt="Select category"
        error={errors.category}
        options={options}
        value={formData.category}
      />

      <Input
        label="Amount"
        name="amount"
        value={formData.amount}
        handleOnChange={handleOnChange}
        formRef={formRefs.amount}
        placeholder="Enter expense title"
        error={errors.amount}
      />

      <div className="input-group flex gap-3 mt-5">
        <button
          onClick={handleExpenseAddBtn}
          className="h-11 px-4 bg-blue-600 font-semibold text-white w-30 rounded-sm hover:bg-pink-600 flex items-center justify-center gap-2"
        >
          Add <BiPlusCircle className="text-lg" />
        </button>
        <button
          onClick={handleReset}
          className="h-11 px-4 bg-white font-semibold text-black border border-gray-400 w-30 rounded-sm hover:border-pink-600 hover:text-pink-600 flex items-center justify-center gap-2"
        >
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
