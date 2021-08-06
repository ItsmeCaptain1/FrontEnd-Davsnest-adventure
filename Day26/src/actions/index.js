const incNumber = () => {
  return {
    type: "INC_NUMBER",
  };
};
const decNumber = () => {
  return {
    type: "DEC_NUMBER",
  };
};
const changeName = (val) => {
  return {
    type: "changeName",
    data: val,
  };
};

const changeEmail = (val) => {
  return {
    type: "changeEmail",
    data: val,
  };
};
export { incNumber, decNumber, changeName, changeEmail };
