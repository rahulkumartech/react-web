export const incNumber = () => {
  return {
    type: "INCREMENT"
  };
};
export const decNumber = () => {
  return {
    type: "DECREMENT"
  };
};
export const allUser = (val) => {
  return {
    type: "All_Usser",
    payload: val
  };
};
