export const debounce = (func, delay) => {
  let debonceHanlder;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debonceHanlder);
    debonceHanlder = setTimeout(() => func.apply(context, args), delay);
  };
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
