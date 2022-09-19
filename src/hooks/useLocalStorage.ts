const useLocalStorage = (): [
  getItem: (value: string) => string | null,
  setItem: (name: string, value: string) => void
] => {
  const setItem = (name: string, value: string) =>
    localStorage.setItem(name, JSON.stringify(value));

  const getItem = (value: string) => {
    var retrievedObject = localStorage.getItem(value);
    try {
      if (retrievedObject === null) {
        return JSON.parse("");
      }
      return JSON.parse(retrievedObject);
    } catch (error) {
      return retrievedObject;
    }
  };

  return [getItem, setItem];
};

export default useLocalStorage;
