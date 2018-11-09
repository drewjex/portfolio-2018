import * as React from 'react';

export class Loading extends React.Component {
	render() {
		return (
      <div className='loading visible-vis'>
        <div className="spinner">
          <div className="cube1"></div>
          <div className="cube2"></div>
        </div>
      </div>
    )
  }
}