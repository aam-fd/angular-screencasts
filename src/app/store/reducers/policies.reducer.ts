import { GET_POLICIES_SUCCESS } from '../actions/policies.action';

const initialState = [];

export function policiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POLICIES_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
}