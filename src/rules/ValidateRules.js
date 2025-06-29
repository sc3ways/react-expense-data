export const validateConfig = {
  title: [
    { required: true, message: "Please enter title." },
    { minLength: 3, message: "Title should be at least 3 characters." },
  ],
  category: [{ required: true, message: "Please select a category." }],
  amount: [
    { required: true, message: "Please enter amount." },
    { isNaN: true, message: "Please enter only number." },
  ],
};
