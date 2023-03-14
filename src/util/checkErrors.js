export const checkIfErrorDataExist = function (type, errors) {
  if (!Boolean(errors)) {
    return false;
  }

  if (Object.keys(errors).length > 0) {
    if (errors.hasOwnProperty(type)) {
      return true;
    } else {
      return false;
    }
  }
};
