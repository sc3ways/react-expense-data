import useLocalStorage from "./useLocalStorage";

export function useFilter(dataLists, callback) {
  const [query, setQuery] = useLocalStorage("query", "");
  const normalQuery = query.toLocaleLowerCase();
  const filteredData = dataLists.filter((data) =>
    normalQuery === ""
      ? dataLists
      : callback(data).toLowerCase().includes(normalQuery)
  );

  return [filteredData, setQuery];
}
