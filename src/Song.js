import React, { Component } from 'react';
import MyButton from './MyButton.js';
import PropTypes from 'prop-types';

/**
* @description This is my song card outline - consists of image, track title, track price, track artist and a 'Listen Now' button.
*
* @property {element}
*/

class Song extends Component {
    render(){
      return(
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card" style={{"height":"100%"}}>
            <img className="card-img-top" src={this.props.artworkUrl100} alt="img"></img>
            <div className="card-body">
              <h4 className="card-title">{this.props.trackName}</h4>
              <p className="card-price" style={{"font-weight":"bold"}}>{"Now for $"+this.props.trackPrice}</p>
              <p className="card-text">{this.props.artistName}</p>
            </div>
            <div className="card-footer">
              <MyButton link={this.props.link} text="Listen Now"></MyButton>
            </div>
          </div>
        </div>
      );
    }
}

Song.propTypes = {
    /**
     * @property {PropTypes.string} artworkUrl100 - The image source URL for the particular album
     */
    artworkUrl100: PropTypes.string,
    /**
     * @property {PropTypes.string} trackName - The name of the track
     */
    trackName: PropTypes.string,
    /**
     * @property {PropTypes.number} trackPrice - The price of the track
     */
    trackPrice: PropTypes.number,
    /**
     * @property {PropTypes.string} artistName - The name of the artist
     */
    artistName: PropTypes.string,
    /**
     * @property {PropTypes.string} link - The link to the URL where you can listen to the track
     */
    link: PropTypes.string,
}

export default Song;