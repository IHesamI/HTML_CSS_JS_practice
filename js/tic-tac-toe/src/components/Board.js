import React from 'react';

import Cell from './Cell';

import './Board.css';


class Board extends React.Component {

  cellClicked = (index) => (event) => {
    event.preventDefault();
    this.props.onCellClick(index);
  }

  render() {
    return (
      <div className="board-container">
        {this.props.data.map((item, index) => (
          <Cell
            key={index}
            data={item}
            onClick={this.cellClicked(index)}
          />
        ))}
      </div>
    );
  }
}

export default Board;
