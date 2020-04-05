import * as types from '../types';

export default (state, action) => {
  switch (action.type) {
    case types.SET_NEWS: {
      return {
        activeCategory: action.activeCategory,
        count: 10,
        news: action.news,
        q: null
      };
    }
    case types.FIND_NEWS: {
      return {
        activeCategory: null,
        count: 10,
        news: action.news,
        q: action.q
      };
    }
    case types.ADD_NEWS: {
      return {
        ...state,
        count: action.count,
        news: action.news
      };
    }
    default:
      return state;
  }
};
