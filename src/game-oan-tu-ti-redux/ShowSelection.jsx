import React, { Component } from 'react';

export default class ShowSelection extends Component {
    render() {
        const { imgLink } = this.props;
        return (
            <div>
                <img src={imgLink} alt="" width="50%" />
            </div>
        )
    }
}
