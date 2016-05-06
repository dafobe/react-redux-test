import React from 'react';
import ComponentList from '../views/component-list';
import * as testApi from '../../services/test-api';

const ComponentListContainer = React.createClass({

  getInitialState: function() {
    return {
      items: []
    }
  },

  componentDidMount: function() {
    testApi.getItems().then(items => {
      this.setState({items: items})
    });
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
      <ComponentList items={this.state.items} deleteItem={this.deleteItem} />
    );
  }

});

export default ComponentListContainer;
