import React from 'react';
import { Link } from 'react-router';
import SearchListContainer from '../containers/search-list-container';

const Page2Layout = React.createClass({
  render: function() {
    return (
      <section>
        <h2>Page 2</h2>
        <SearchListContainer>
          {this.props.children}
        </SearchListContainer>
      </section>
    );
  }
});

export default Page2Layout;
