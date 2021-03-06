import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConcertCard from './concert_card';

class ConcertsList extends Component {
  renderList() {
    const { concerts } = this.props;

    return concerts.map(concert => (
      <div key={concert.concert_id} className='card-grid'>
        <ConcertCard concert={concert} />
      </div>
    ));
  }
  render() {
    return (
      <div>
        <div className="row">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export const RecentConcertsList = connect(state => ({
  concerts: state.recentConcerts
}))(ConcertsList);

export const SearchConcerts = connect(state => ({
  concerts: state.searchConcerts
}))(ConcertsList);

