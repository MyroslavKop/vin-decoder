const removeEmptyFields = (arr) => {
  return arr.filter(({ Value }) => Value !== '' && Value !== null);
};

export default removeEmptyFields;
