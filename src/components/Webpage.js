import React from 'react';
import ReactDOM from 'react-dom';
import FillerText from './FillerText';

const title = "The world's coolest webpage"
export default class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h1>`${title}`</h1>
        <FillerText />
        <FillerText />
      </div>
    )
  }

}
