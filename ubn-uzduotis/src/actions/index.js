import { LOG_IN } from './types'

export const loginUser = (userName, password) => {
  return {
    type: LOG_IN,
    userName,
    password
  };
};
