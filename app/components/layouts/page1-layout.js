import React from 'react';
import { Link } from 'react-router';

const Page1Layout = React.createClass({
  render: function() {
    return (
      <section>
        <h2>Page 1</h2>
        {this.props.children}
      </section>
    );
  }
});

export default Page1Layout;
