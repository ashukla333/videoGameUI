
export const debounce = (func, delay) => {
    let timeoutId;
  
    const debouncedFunction = (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  
    debouncedFunction.cancel = () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  
    return debouncedFunction;
  };
  
  export const createUrlParamsFunction = (urlObject = {}, restrictedValue = []) => {
    return new URLSearchParams(
      Object.fromEntries(
        Object.entries(urlObject).filter(
          ([_, v]) =>
            [...[null, undefined, "ALL", ""], ...restrictedValue].includes(v) !== true
        )
      )
    ).toString();
  };
  