const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updateCart = [...state.cart];
      const updatedItemIndex = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updateCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updateCart[updatedItemIndex] };
        updatedItem.quantity++;
        updateCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updateCart };
    }

    case "DEC": {
      const updateCart = [...state.cart];
      const updatedItemIndex = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updateCart[updatedItemIndex] };
      if (updatedItem.quantity === 1) {
        const filteredCart = updateCart.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, cart: filteredCart };
      } else {
        updatedItem.quantity--;
        updateCart[updatedItemIndex] = updatedItem;
        return { ...state, cart: updateCart };
      }
    }
    default:
      return state;
  }
};

export default CartReducer;
