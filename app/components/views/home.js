import React from 'react';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>Home Layout</h1>
        Applied concepts:
        <ul>
          <li>Routing</li>
          <li>Container Components (smart)</li>
          <li>Stateless Components (dumb)</li>
        </ul>
        <p>
          Author: David Fonollosa
        </p>
      </div>
    );
  }
});

export default Home;
