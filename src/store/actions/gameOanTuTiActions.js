import * as gameOanTuTiConstants from '../constants/gameOanTuTiConstants';

export const actPlayerSelect = selection => ({
    type: gameOanTuTiConstants.playerSelection,
    payload: selection,
})

export const actComputerSelect = () => ({
    type: gameOanTuTiConstants.computerSelection,
})