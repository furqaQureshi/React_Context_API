export const addData = (data) => {
  return {
    type: "ADDDATA",
    payload: data,
  };
};
export const removeData = (data) => {
  return {
    type: "REMOVEDATA",
    payload: data,
  };
};
export const increment = (data) => {
  return {
    type: "INCREMENT",
    payload: data,
  };
};
export const decrement = (data) => {
  return {
    type: "DECREMENT",
    payload: data,
  };
};
