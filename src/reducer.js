export const initialState = {
  basket: [],
  user: null,
};

// Reduce(), what it does is it iterates through the basket and tally ups (sums up) the item.price
// amount is the initial amount = £0
// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // state is the current state of the app
  switch (action.type) {
    // case "EMPTY_BASKET":
    //   return { ...state, basket: [] };

    case "ADD_TO_BASKET":
      return {
        // return whatever the state is
        ...state,
        // return the current state of the basket plus the new item
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        // "findIndex()" will find the first one and return just that one
        (basketItem) => basketItem.id === action.id
      );
      // copy basket context
      let newBasket = [...state.basket];
      // found the item in the index
      if (index >= 0) {
        // removes the index by 1 from the array (basket/newBasket)
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
