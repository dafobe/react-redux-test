import React from 'react';

const ComponentItem = React.createClass({
  render: function(props) {
    return (
        <li>
          Component {this.props.id} - {this.props.name} - {this.props.experience}
        </li>
    );
  }
});

export default ComponentItem;
