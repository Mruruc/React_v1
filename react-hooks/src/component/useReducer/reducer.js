import { CLEAR_LIST, REMOVE_USER, RESET_LIST } from './action_type';
import { data } from '../../data';

function reducer(state, action) {
  if (action.type === CLEAR_LIST) {
    return { ...state, users: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, users: data };
  }
  if (action.type === REMOVE_USER) {
    const newUsers = state.users.filter((user) => {
      return user.id !== action.payload.id;
    });

    return {
      ...state,
      users: newUsers
    };
  }
}

export default reducer;
