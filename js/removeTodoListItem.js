const removeTodoListItem = (id) => {
  const liElem = document.querySelector(`li[data-id='${id}']`);

  if (liElem) {
    liElem.remove();
  }
};

export { removeTodoListItem };
