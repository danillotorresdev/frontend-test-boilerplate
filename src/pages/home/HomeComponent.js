import React, { Component } from "react";
import MultiSteps from './MultiSteps'
import Vehicles from './Vehicles'


class HomeComponent extends Component {
  render() {

    return (
      <React.Fragment>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <MultiSteps />
            </div>
          </div>
        </div>

      </React.Fragment >
    );
  }
}



export default HomeComponent;
