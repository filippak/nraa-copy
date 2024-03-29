import axios from 'axios';
import {
  DEMO_FETCH_REDDIT_LIST_BEGIN,
  DEMO_FETCH_REDDIT_LIST_SUCCESS,
  DEMO_FETCH_REDDIT_LIST_FAILURE,
  DEMO_FETCH_REDDIT_LIST_DISMISS_ERROR,
} from './constants';

// Rekit uses redux-thunk for async actions by default: https://github.com/gaearon/redux-thunk
// If you prefer redux-saga, you can use rekit-plugin-redux-saga: https://github.com/supnate/rekit-plugin-redux-saga
export function fetchRedditList(args = {}) {
  return (dispatch) => { // optionally you can have getState as the second argument
    dispatch({
      type: DEMO_FETCH_REDDIT_LIST_BEGIN,
    });

    // Return a promise so that you could control UI flow without states in the store.
    // For example: after submit a form, you need to redirect the page to another when succeeds or show some errors message if fails.
    // It's hard to use state to manage it, but returning a promise allows you to easily achieve it.
    // e.g.: handleSubmit() { this.props.actions.submitForm(data).then(()=> {}).catch(() => {}); }
    const promise = new Promise((resolve, reject) => {
      // doRequest is a placeholder Promise. You should replace it with your own logic.
      // See the real-word example at:  https://github.com/supnate/rekit/blob/master/src/features/home/redux/fetchRedditReactjsList.js
      // args.error here is only for test coverage purpose.
      const doRequest = axios.get('http://localhost:10010/recipients?name=jdskn');
      doRequest.then(
        (res) => {
          dispatch({
            type: DEMO_FETCH_REDDIT_LIST_SUCCESS,
            data: res,
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        (err) => {
          dispatch({
            type: DEMO_FETCH_REDDIT_LIST_FAILURE,
            data: { error: err },
          });
          reject(err);
        },
      );
    });

    return promise;
  };
}

// Async action saves request error by default, this method is used to dismiss the error info.
// If you don't want errors to be saved in Redux store, just ignore this method.
export function dismissFetchRedditListError() {
  return {
    type: DEMO_FETCH_REDDIT_LIST_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case DEMO_FETCH_REDDIT_LIST_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        fetchRedditListPending: true,
        fetchRedditListError: null,
      };

    case DEMO_FETCH_REDDIT_LIST_SUCCESS:
      // The request is success
      return {
        ...state,
        fetchRedditListPending: false,
        fetchRedditListError: null,
        redditList: action.data,
      };

    case DEMO_FETCH_REDDIT_LIST_FAILURE:
      // The request is failed
      return {
        ...state,
        fetchRedditListPending: false,
        fetchRedditListError: action.data.error,
      };

    case DEMO_FETCH_REDDIT_LIST_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        fetchRedditListError: null,
      };

    default:
      return state;
  }
}
