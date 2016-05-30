import React from 'react';
import { connect } from 'react-redux';
import ComponentList from '../views/component-list';
import * as testApi from '../../services/test-api';

import store from '../../store';
import { getItems, deleteItem } from '../../actions/items-actions';

const ComponentListContainer = React.createClass({

  deleteItem: function(itemId) {
    console.log('Delete Item: Call service and then update the state')
//    widgetApi.deleteWidget(widgetId).then(() => {
//      const newWidgets = _.filter(this.state.widgets, widget => widget.id != widgetId);
//      this.setState({widgets: newWidgets})
//    });
  },
  componentDidMount: function() {
    testApi.getItems();
  },
  render: function() {
    console.log('component-list-container', this.props);
    return (
      <ComponentList items={this.props.items} deleteItem={this.deleteItem} />
    );
  }

});

const mapStateToProps = function(store) {
  function getItems(){
    let items = store.itemsState.getIn(['items']);
    return items?items.toJS():[]
  }
  
  return {
    items: getItems()
  };
};

export default connect(mapStateToProps)(ComponentListContainer);
