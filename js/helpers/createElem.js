export default (name, options = {}) => {
  const elem = document.createElement(name);

  if (options.classNames) {
    if (typeof options.classNames === "string") {
      elem.classList.add(options.classNames);
    } else {
      options.classNames.forEach((className) => {
        elem.classList.add(className);
      });
    }
  }

  if (options.attrs) {
    options.attrs.forEach(({ key, value }) => {
      if (key === "checked" && value === false) return;
      elem.setAttribute(key, value);
    });
  }

  if (options.textContent) {
    elem.textContent = options.textContent;
  }

  return elem;
};
