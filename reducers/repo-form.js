import { SET_INPUT } from '../actions/types';


const initialState = {
  repoName: { value: '' }
}
const repoForm = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state, repoName: {
          value: action.payload.value
        }
      }
    default:
      return state;
  }
}

export default repoForm;