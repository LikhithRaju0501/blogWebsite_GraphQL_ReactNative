/* eslint-disable prettier/prettier */

const ViewToggleBox = ({showIfTrue, replaceWith, children}) => {
  return showIfTrue ? replaceWith : children ? children : null;
};

export default ViewToggleBox;
