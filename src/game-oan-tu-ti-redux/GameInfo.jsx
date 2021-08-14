import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameInfo extends Component {
    render() {
        return (
            <div>
                <h2>I'm Iron Man, I love you 3000!</h2>
                <h3>Số bàn thắng: {this.props.wonGames}</h3>
                <h3>Số bàn chơi: {this.props.playedGames}</h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    wonGames: state.gameOanTuTiReducer.wonGames,
    playedGames: state.gameOanTuTiReducer.playedGames,
})

export default connect(mapStateToProps)(GameInfo);