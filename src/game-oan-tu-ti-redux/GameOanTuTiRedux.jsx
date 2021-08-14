import React, { Component } from 'react';
import { connect } from 'react-redux';
import './bubble.css';
import ShowSelection from './ShowSelection';
import GameInfo from './GameInfo';
import { actPlayerSelect, actComputerSelect } from '../store/actions/gameOanTuTiActions';
import * as gameOanTuTiConst from '../store/constants/gameOanTuTiConstants';

class GameOanTuTiRedux extends Component {
    render() {
        const { playerSelect, computerSelect } = this.props;
        // console.log(this.props.playerSelect);
        return (
            <div className="game-container text-center">
                <div className="container-fluid pt-5">
                    <div className="row">
                        <div className="col-4" style={{ maxHeight: "50vh" }}>
                            <div className="speech-bubble">
                                <ShowSelection imgLink = {this.props.playerSelection} />
                            </div>
                            <img src={gameOanTuTiConst.imgPlayer} alt="" width="30%" />
                            <div className="row justify-content-around px-3">
                                <button className="col-3 btnSelect" onClick={() => playerSelect(1)}>
                                    <img src={gameOanTuTiConst.imgBao} alt="" width="70%"/>
                                </button>
                                <button className="col-3 btnSelect" onClick={() => playerSelect(2)}>
                                    <img src={gameOanTuTiConst.imgKeo} alt="" width="70%"/>
                                </button>
                                <button className="col-3 btnSelect" onClick={() => playerSelect(3)}>
                                    <img src={gameOanTuTiConst.imgBua} alt="" width="70%"/>
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                            <GameInfo />
                            <button className="btn btn-success" onClick={computerSelect}>Play!</button>
                        </div>
                        <div className="col-4">
                            <div className="speech-bubble">
                                <ShowSelection imgLink = {this.props.computerSelection}/>
                            </div>
                            <img src={gameOanTuTiConst.imgComputer} alt="" width="30%" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    playerSelection: state.gameOanTuTiReducer.playerSelection,
    computerSelection: state.gameOanTuTiReducer.computerSelection,
    
})

const mapDispatchToProps = dispatch => ({
    playerSelect: selection => {
        dispatch(actPlayerSelect(selection));
    },

    computerSelect: () => {
        dispatch(actComputerSelect());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(GameOanTuTiRedux);