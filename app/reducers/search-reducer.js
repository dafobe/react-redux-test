import * as types from '../actions/action-types';

const initialState = {
                      items: [],
                      pattern: '',
                      searchType: 'by Name'
                      };

const searchReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.FILTER_ITEM:
      return Object.assign({}, state, {
                                        items: action.pattern?action.items.filter(item => {
                                                                      let pattern = new RegExp(action.pattern?action.pattern.toLowerCase():action.pattern);
                                                                      return pattern.test(item.name.toLowerCase());
                                                                    }):action.items,
                                        pattern: action.pattern,
                                        searchType: action.searchType || state.searchState
      });
  }
  return state;
}

export default searchReducer;