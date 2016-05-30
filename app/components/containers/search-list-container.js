import React from 'react';
import { connect } from 'react-redux';
import SearchListLayout from '../layouts/search-list-layout';
import ComponentListContainer from '../views/component-list';
import * as testApi from '../../services/test-api';

import store from '../../store';
import { loadSearchLayout } from '../../actions/search-actions';

const SearchListContainer = React.createClass({

  componentDidMount: function() {
    testApi.getItems();
    testApi
  },

  filter: function(value) {
    testApi.filterItems(value);
  },

  render: function() {
    return (
      <SearchListLayout items={this.props.items} title={this.props.searchType} filter={this.filter} />
    );
  }

});

const mapStateToProps = function(store) {
  function getItems(){
    let items = store.itemsState.getIn(['filteredItems']);
    return items?items.toJS():[]
  }
  
  return {
    items: getItems(),
    searchType: store.searchState.getIn(['searchType'],'')
  };
};

export default connect(mapStateToProps)(SearchListContainer);
