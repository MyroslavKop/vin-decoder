const validation = (value) => {
  const correctVia = /^[a-zA-Z0-9]+$/;

  if (!value) {
    return 'The field cannot be empty';
  }

  if (value.length > 17) {
    return 'The field cannot be longer than 17 characters';
  }

  if (!correctVia.test(value)) {
    return 'Symbols cannot be used';
  }

  return '';
};

export default validation;
