import {LOGOUT, SAVE_USER} from '../actionTypes';

interface actionProps {
  type: string;
  payload: object;
}

interface stateProps {
  token: string;
}

const initialState = {
  token: '',
  mail: 'eve.holt@reqres.in',
};

export default (state: stateProps = initialState, action: actionProps) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
