export const initialState = {
  token: undefined,
  user: undefined,
  repoId: [],
  user2: undefined,
  events: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "log-user":
      return {
        ...state,
        user: action.user,
        token: action.token,
      };
    case "add-events":
      return {
        ...state,
        events: [...state.events, action.item],
      };
    case "remove-events":
      let newEvent = [...state.events];
      const idx = state.events.findIndex(
        (eventItem) => eventItem.id === action.id
      );
      if (idx >= 0) {
        newEvent.splice(idx, 1);
      } else {
        console.warn(
          `Cant remove repo (id: ${action.id}) as it's not in list`
        );
      }
      return { ...state, events: newEvent };
    case "add-fav":
      return {
        ...state,
        repoId: [...state.repoId, action.item],
      };
    case "remove-fav":
      let newBasket = [...state.repoId];
      const index = state.repoId.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove repo (id: ${action.id}) as it's not in list`
        );
      }
      return { ...state, repoId: newBasket };
    default:
      return state;
  }
};

export default reducer;
