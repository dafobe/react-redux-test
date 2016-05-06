import React from 'react';
import SearchListLayout from '../layouts/search-list-layout';
import ComponentListContainer from '../views/component-list';
import * as testApi from '../../services/test-api';

const SearchListContainer = React.createClass({

  getInitialState: function() {
    return {
      items: [],
      filteredItems: [],
      title: 'by Name'
    }
  },

  componentDidMount: function() {
    testApi.getItems().then(items => {
      this.setState({items: items, filteredItems: items})
    });
  },

  filter: function(value) {
    let newItemsState = this.state.items.filter(item => {
                      let pattern = new RegExp(value.toLowerCase());
                      return pattern.test(item.name.toLowerCase());
                    })
    this.setState({filteredItems:newItemsState});
  },

  render: function() {
    return (
      <SearchListLayout items={this.state.filteredItems} title={this.state.title} filter={this.filter} />
    );
  }

});

export default SearchListContainer;
