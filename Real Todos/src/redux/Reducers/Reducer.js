const initialState = {
  userData: [],
  counter: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDDATA":
      return {
        ...state,
        userData: [action.payload],
      };
    case "REMOVEDATA":
      return {
        ...state,
        userData: state.userData.filter((x) => x.id !== action.payload),
      };
    case "INCREMENT":
      let product = action.payload;
      product.qty = (product.qty ? product.qty : 1) + 1;
      let oldCards = state.card.filter((p) => p.id !== product.id);
      return { ...state, card: [...oldCards, product] };
    case "DECREMENT":
      let currentCard = action.payload;
      let filt;
      filt = state.card.filter((product) => product.id !== currentCard.id);
      if (currentCard.qty > 1) {
        currentCard.qty -= 1;
        return {
          ...state,
          card: [...filt, currentCard],
        };
      } else {
        return {
          ...state,
          card: [...filt],
        };
      }
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
