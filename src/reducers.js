const initialState = {
  inventory: [],
  removedItems: [],
  remainingItems: 0,
};

const adminInventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INVENTORY":
      return {
        ...state,
        inventory: action.payload,
      };
    case "FETCH_REMOVED_ITEMS":
      return {
        ...state,
        removedItems: action.payload,
      };
    case "FETCH_REMAINING_ITEMS":
      return {
        ...state,
        remainingItems: action.payload,
      };
    case "ADD_ENTRY_SUCCESS":
      if (action.payload.entryType === "addToStorage") {
        return {
          ...state,
          inventory: [...state.inventory, action.payload],
        };
      } else {
        return {
          ...state,
          removedItems: [...state.removedItems, action.payload],
        };
      }
    default:
      return state;
  }
};
export default adminInventoryReducer;
