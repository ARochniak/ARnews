import * as types from '../types';

export default (state, action) => {
  switch (action.type) {
    case types.SET_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case types.SET_NEWS: {
      return {
        activeCategory: action.activeCategory,
        count: 10,
        news: action.news,
        q: null,
        isLoading: false
      };
    }
    case types.FIND_NEWS: {
      return {
        activeCategory: null,
        count: 10,
        news: action.news,
        q: action.q,
        isLoading: false
      };
    }
    case types.ADD_NEWS: {
      return {
        ...state,
        count: action.count,
        news: action.news,
        isLoading: false
      };
    }
    default:
      return state;
  }
};
