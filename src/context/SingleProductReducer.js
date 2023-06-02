
const SingleProductReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

export default SingleProductReducer;
