import { createStore } from "redux";

const initialState = {
  persons: [],
};

export const store = createStore(
  reducer,
  initialState,
   
);

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_PERSON":
      return {
        ...state,
        products: [...state.products, payload],
      };
        case "DELETE_PERSON":
      return {
        ...state,
        products: state.product.filter((product) => product.id !== payload),
      };
     
    default:
      return state;
  }
}
// Actions
export const addPerson = (person) => ({
  type: "ADD_PERSON",
  payload: person,
});

export const deleteProduct = (id) => ({
  type: "DELETE_PERSON",
  payload: id,
});

