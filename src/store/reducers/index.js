import * as types from '../types';

export default (state, action) => {
  switch (action.type) {
    case types.SET_NEWS: {
      return {
        activeNews: action.activeNews,
        news: action.news
      };
    }
    case types.ADD_NEWS: {
      return {
        ...state,
        news: action.news
      };
    }
    default:
      return state;
  }
};
