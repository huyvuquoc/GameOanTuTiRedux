import * as gameOanTuTiConst from '../constants/gameOanTuTiConstants';

const initialState = {
    // Default value
    playerSelection: gameOanTuTiConst.imgBao,
    computerSelection: gameOanTuTiConst.imgKeo,
    wonGames: 0,
    playedGames: 0,
}

const gameOanTuTiReducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case gameOanTuTiConst.playerSelection:
            return { ...state, playerSelection: getShowSelection(payload) };
        case gameOanTuTiConst.computerSelection: 
            // Lay lựa chọn random
            const randomIndex = Math.floor(Math.random() * 3) + 1;
            
            // cap nhat lựa chon random
            state.computerSelection = getShowSelection(randomIndex);

            // KEO BUA BAO
            state.playedGames += 1; // cap nhat so ban choi
            switch (state.playerSelection) {
                // kiem tra khi thắng
                case gameOanTuTiConst.imgBao:
                    if(state.computerSelection === gameOanTuTiConst.imgBua) {
                        state.wonGames += 1;
                    }
                    break;

                case gameOanTuTiConst.imgKeo:
                    if(state.computerSelection === gameOanTuTiConst.imgBao) {
                        state.wonGames += 1;
                    }
                    break;

                case gameOanTuTiConst.imgBua:
                    if(state.computerSelection === gameOanTuTiConst.imgKeo) {
                        state.wonGames += 1;
                    }
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    return {...state};
}

const getShowSelection = payload => {
    switch (payload) {
        case 1:
            return gameOanTuTiConst.imgBao;
        case 2:
            return gameOanTuTiConst.imgKeo;
        case 3:
            return gameOanTuTiConst.imgBua;
        default:
            break;
    }
}

export default gameOanTuTiReducer;