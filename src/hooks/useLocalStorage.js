import React, { useEffect, useState } from "react";

export default function useLocalStorage(key, initialData) {
  const [storageData, setStorageData] = useState(initialData);
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    if (existingData) {
      setStorageData(existingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, []);
  const updateStorageData = (newData) => {
    if (typeof newData === "function") {
      localStorage.setItem(key, JSON.stringify(newData(storageData)));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
    }
    setStorageData(newData);
  };
  return [storageData, updateStorageData];
}
