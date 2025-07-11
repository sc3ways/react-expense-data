import React from "react";

export default function ContextMenu({
  contextMenuPosition,
  setContextMenuPosition,
  rowId,
  setExpensiveData,
  setFormData,
  expensiveData,
  setUpdatingDataId,
}) {
  if (!contextMenuPosition.left) return;
  return (
    <div
      className="context-menu min-w-18 p-1 absolute border border-gray-300 bg-white flex flex-col shadow-sm rounded-md shadow-gray-600 z-10"
      style={contextMenuPosition}
    >
      <span
        className="py-1 px-2 block hover:bg-gray-200 cursor-default rounded-sm"
        onClick={(e) => {
          console.log("Editing");

          console.log(expensiveData.find((data) => data.id === rowId));
          const { title, category, amount } = expensiveData.find(
            (data) => data.id === rowId
          );
          setFormData({
            title: title,
            category: category,
            amount: amount,
          });
          setUpdatingDataId(rowId);
          setContextMenuPosition({});
        }}
      >
        Edit
      </span>
      <span
        className="py-1 px-2 block hover:bg-gray-200 cursor-default rounded-sm"
        onClick={(e) => {
          setExpensiveData((prevData) =>
            prevData.filter((data) => data.id !== rowId)
          );
          setContextMenuPosition({});
        }}
      >
        Delete
      </span>
    </div>
  );
}
