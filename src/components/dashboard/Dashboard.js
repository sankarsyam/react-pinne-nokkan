import React, { Component } from 'react';
import FlowGrid from './FlowGrid';
import ViewHeader from './ViewHeader';

export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <ViewHeader />
        <FlowGrid />
      </div>
    );
  }
}
