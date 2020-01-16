import * as types from '../types';

export default (state, action) => {
  switch (action.type) {
    case types.SET_NEWS: {
      return {
        activeCategory: action.activeCategory,
        count: 10,
        news: action.news
      };
    }
    case types.ADD_NEWS: {
      return {
        ...state,
        count: state.count + 10,
        news: action.news
      };
    }
    default:
      return state;
  }
};
