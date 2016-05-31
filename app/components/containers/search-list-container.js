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
    this.filter();
  },

  filter: function(pattern) {
    const items = this.props.items || [];
    testApi.filterItems(items, pattern);
  },

  render: function() {
    return (
      <SearchListLayout items={this.props.filteredItems} title={this.props.searchType} filter={this.filter} />
    );
  }

});

const mapStateToProps = function(store) {
  function getItems(){
    const items = store.itemsState.getIn(['items']);
    return items?items.toJS():[]
  }
  function getFilteredItems(){
    let filteredItems = store.searchState.getIn(['filteredItems']);
    return filteredItems || [];
  }
  return {
    items: getItems(),
    filteredItems: getFilteredItems(),
    searchType: store.searchState.getIn(['searchType'],'')
  };
};

export default connect(mapStateToProps)(SearchListContainer);
