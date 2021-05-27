import {SAVE_USER, LOGOUT} from '../actionTypes';
import {UserProps} from '../stateTypes';

/**
 * @param user user object will be saved to redux state
 * @returns void
 */

export const saveUser = (user: UserProps) => ({
  type: SAVE_USER,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});
