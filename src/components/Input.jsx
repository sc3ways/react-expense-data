import React from "react";
import { BiErrorCircle } from "react-icons/bi";

export default function Input({
  label,
  name,
  formRef,
  handleOnChange,
  error,
  placeholder,
  value,
  type,
}) {
  return (
    <div className="input-group mb-4 relative">
      <label htmlFor={label} className="font-semibold mb-1 block">
        {label}
      </label>
      <input
        type={type}
        ref={formRef}
        name={name}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
        className="w-full h-11 border border-gray-300 rounded-sm bg-white text-gray-800 px-4 focus:outline-none focus:border-red-500"
      />
      {error && (
        <p className="text-red-500 text-sm flex gap-1 items-center absolute bottom-3 right-4">
          <BiErrorCircle />
          {error}
        </p>
      )}
    </div>
  );
}
