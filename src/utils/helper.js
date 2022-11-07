export const getUserLocal = () => {
  const user = localStorage.getItem("user");

  if (user) return JSON.parse(user);
};

export const setUserLocal = (user) => {
  const stringifyData = JSON.stringify(user);
  localStorage.setItem("user", stringifyData);
};

export const removeUser = () => {
  localStorage.removeItem("user");
};
