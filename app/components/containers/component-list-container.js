import React from 'react';
import { connect } from 'react-redux';
import ComponentList from '../views/component-list';
import * as testApi from '../../services/test-api';

import store from '../../store';
import { getItems, deleteItem } from '../../actions/items-actions';

const ComponentListContainer = React.createClass({

  componentDidMount: function() {
    testApi.getItems();
  },

  deleteItem: function(itemId) {
    console.log('Delete Item: Call service and then update the state')
//    widgetApi.deleteWidget(widgetId).then(() => {
//      const newWidgets = _.filter(this.state.widgets, widget => widget.id != widgetId);
//      this.setState({widgets: newWidgets})
//    });
  },

  render: function() {
    return (
      <ComponentList items={this.props.items} deleteItem={this.deleteItem} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    items: store.itemsState.items
  };
};

export default connect(mapStateToProps)(ComponentListContainer);
