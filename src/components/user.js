import React, { Component } from 'react';
import FilterSidebar from './filter_sidebar';
import SearchResultList from './search_results_list';

export default class Home extends Component {
  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="one-third column">
          <FilterSidebar />
        </div>
        <div className="two-thirds column">
          <SearchResultList numberOfColumns={2} />
        </div>
      </div>
    </div>
  );
  }
}
