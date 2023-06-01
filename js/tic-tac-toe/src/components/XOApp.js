import React from 'react';
import { connect } from 'react-redux';

import { Move, RESTART } from '../store/actions';

import Board from './Board';

import './XOApp.css';


const mapStateToProps = (state) => {
  return {
    turn: state.turn,
    board: state.board,
    winner: state.winner,
  };
};

const mapDispatchToProps = (dispatch) => {
  // ...
  return {
    cellclicked: (index) => dispatch(Move(index)),
    Restart: () => dispatch(RESTART())
  }

};

class XOApp extends React.Component {

  cellClicked = (index) => {
    // ...
    this.props.cellclicked(index)
  };

  restart = (event) => {
    event.preventDefault();
    // this.props.restart_event(index)
    this.props.Restart()
  };

  render() {
    // console.log(this.props.turn)
    return (
      <div className="app-container">
        <div>
          {this.props.winner === '' ?
            <h1>{this.props.turn.toUpperCase()} turn!</h1>
            :
            this.props.winner === '-' ?
              <h1>Its a tie!</h1>
              :
              <h1>{this.props.winner.toUpperCase()} won!</h1>
          }
          <Board
            data={this.props.board}
            onCellClick={this.cellClicked}
          />
          <div className="simulate-button" onClick={this.restart}>Restart!</div>
        </div>
      </div>
    );
  }
}

XOApp = connect(mapStateToProps, mapDispatchToProps)(XOApp);

export default XOApp;
