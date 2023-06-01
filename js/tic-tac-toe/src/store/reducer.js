import { cellclicked, reset_game } from "./actions";
const initialState = {
  board: Array(9).fill(''),
  turn: 'x',
  winner: '',
};

function index_checker(nodes, elm, index) {
  if ((nodes[elm] === 'x' || nodes[elm] === 'o') && nodes[elm] === nodes[elm + index] && nodes[elm] === nodes[elm + index * 2]) {
    return nodes[elm]
  }
  return ''
}

function check_for_winner(nodes) {
  let winner = ''
  const head_columns = [0, 1, 2]
  const head_rows = [0, 3, 6]

  head_columns.forEach(elm => {
    const checked_value = index_checker(nodes, elm, 3)
    if (checked_value !== '') {
      winner = checked_value
    }
  })

  if (winner !== '')
    return winner

  head_rows.forEach(elme => {
    const checked_value = index_checker(nodes, elme, 1)
    if (checked_value !== '') {
      winner = checked_value
    }
  })
  if (winner !== '')
    return winner

  if (nodes.filter(e => e !== '').length === nodes.length) {
    winner = '-'
  }
  return winner
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case cellclicked:
      if (state.winner === '')
        if (state.board[action.index] === '') {
          const new_board = state.board
          new_board[action.index] = state.turn
          const winner = check_for_winner(new_board)

          return { winner: winner, turn: state.turn === 'x' ? 'o' : 'x', board: new_board }
        }
      return state
    case reset_game:
      return {
        board: Array(9).fill(''),
        turn: 'x',
        winner: '',
      };
    default:
      return state;
  }
}

export default reducer;
