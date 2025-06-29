import { BiErrorCircle } from "react-icons/bi";

export default function Select({
  label,
  name,
  formRef,
  handleOnChange,
  error,
  defaultOpt,
  options,
  value,
}) {
  return (
    <div className="input-group mb-4 relative">
      <label htmlFor="category" className="font-semibold mb-1 block">
        {label}
      </label>
      <select
        name={name}
        ref={formRef}
        onChange={handleOnChange}
        value={value}
        className="w-full h-11 border border-gray-300 rounded-sm bg-white text-gray-800 px-4 focus:outline-none focus:border-red-500"
      >
        <option value="" hidden>
          {defaultOpt}
        </option>
        {options}
        {options.map((option, index) => (
          <option key={index + 1} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-sm flex gap-1 items-center absolute bottom-3 right-4">
          <BiErrorCircle />
          {error}
        </p>
      )}
    </div>
  );
}
