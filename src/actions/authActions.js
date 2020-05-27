
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';

/*
export const registerUser = newUser => dispatch => {
   if (name === "Yash Bhatt" && email === "bhattyash15@gmail.com" && password === "Bhatt@9454" && password2 === "Bhatt@9454") {
     const user={
       user_id:"user-1",
       name1:"test",
       email:newUser.email,
      password:newUser.password, password2:newUser.password2
     };
     localStorage.setItem("user",JSON.stringify(user));
      localStorage.setItem("test","test value");
      setTimeout(() => {
        // alert("form Submitted")
    console.log("local storage get:", localStorage.getItem("test"));
    }, 3000);
 }
};
*/
 // register user
export const registerUser = (newUser, history) => (dispatch) => {
  if (
    newUser.name === 'Yash Bhatt' &&
    newUser.email === 'bhattyash15@gmail.com' &&
    newUser.password === 'Bhatt@9454' &&
    newUser.password2 === 'Bhatt@9454'
  ) {
    const user = {
      user_id: 'user-1',
      name: 'test',
      email: newUser.email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('test', 'test value'); //write
    setTimeout(() => {
      console.log('local storage get:', localStorage.getItem('test'));
    }, 3000);
    history.push('/login');
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: { email: "Email doesn't Match" },
    });
  }
};

         // Login - get user token
export const loginUser = (userData) => (dispatch) => {
  if (
     userData.token!==null
  ) {
    const user = {
      user_id: 'user-1',
      name: 'test',
      email: userData.email,
      token:userData.token
    };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('test', 'test value'); //write
    setTimeout(() => {
      console.log('local storage get:', localStorage.getItem('test'));
    }, 3000);

    dispatch(setCurrentUser(user));
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: {
        email: "Email doesn't Match",
        password: 'Enter correct Password',
      },
    });
  }
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem('user');

  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
