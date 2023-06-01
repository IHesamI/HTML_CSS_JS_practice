// actions here

export const cellclicked = 'CellClicked'
export const reset_game = 'reset_game'

function Move(index) {
    return {
        type: cellclicked,
        index: index
    }
}

function RESTART() {

    return {
        type: reset_game
    }
}


export { Move }
export { RESTART }