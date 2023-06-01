import React from 'react';
import classNames from 'classnames';

import './Cell.css';


class Cell extends React.Component {

  render() {
    const d = this.props.data;

    return (
      <div
        className={classNames({
          'cell': true,
          'red': d.toLowerCase() === 'x',
          'blue': d.toLowerCase() === 'o',
        })}
        onClick={this.props.onClick}
      >
        {d.toUpperCase()}
      </div>
    );
  }
}

export default Cell;
