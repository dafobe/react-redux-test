import React from 'react';
import ComponentList from '../views/component-list';

const SearchListLayout = React.createClass({
  filter: function(){
    this.props.filter(this.refs.searchInput.value);
  },
  render: function() {
    let placeHolder = "Search " + this.props.title;

    return (
      <div className="search">
        <header className="search-header">
          <input type="search" ref="searchInput" placeholder={placeHolder} onChange={this.filter}/>
        </header>
        <div className="search-results">
          <ComponentList items={this.props.items} />
        </div>
        <footer className="search-footer">
        </footer>
      </div>
    );
  }
});

export default SearchListLayout;
