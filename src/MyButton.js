import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* @description This is my button outline for all buttons excluding the form submit button.
*
* @property {element}
*/

class MyButton extends Component {

    render() {
      return(
        <a href={this.props.link} id={this.props.buttonId} className="btn btn-primary" onClick={this.props.change}>{this.props.text}</a>
      );
    }
}

MyButton.propTypes = {
    /**
     * @property {PropTypes.string} link - The destination URL upon clicking the button
     */
    link: PropTypes.string,
    /**
     * @property {PropTypes.string} buttonId - The id of the specific button, used for sorting buttons
     */
    buttonId: PropTypes.string,
    /**
     * @property {PropTypes.func} change - The onClick function that changes state in App, used for sorting buttons
     */
    change: PropTypes.func,
    /**
     * @property {PropTypes.string} text - The text in the button
     */
    text: PropTypes.string
}

export default MyButton;