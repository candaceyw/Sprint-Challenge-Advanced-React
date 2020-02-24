import React, { Component } from 'react'

 class PlayerCard extends Component {
    render() {
        return (
            <div className="cardWrapper">
            <div className="playerCard">
            <h2>{this.props.name}</h2>
            <p>Country: {this.props.country}</p>
            <p>Searches: {this.props.searches}</p>
          </div>
          </div>
           
        )
    }
}

export default PlayerCard;