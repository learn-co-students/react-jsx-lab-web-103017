import React from 'react';

class Webpage extends React.Component {
  render(){
    return (
      <div>
        <h1>
        `The world's coolest webpage`
        </h1>
        <FillerText/>
        <FillerText/>
      </div>

    )
  }
}

import FillerText from './FillerText';
import RegistrationForm from './RegistrationForm';

export default Webpage;
