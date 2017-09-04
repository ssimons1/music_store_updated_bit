import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* @description This is my search engine form - consists of input textbox and submit search button.
*
* @property {element}
*/

class My_form extends Component{
/**
 * constructor
 * @param {object} props
 */
  constructor(props){
      super(props);
      this.handleChange=this.handleChange.bind(this);

    }

    /**
     * @param {object} event - An event object on changing input value.
     */
    handleChange(event) {
        event.preventDefault();
        /** @function */
        this.props.artistValue(event.target.value);
    }


    render() {
        return(
          <form className="search_form" onSubmit={this.props.callback}>
              <input type="text" name="search_info" className="form-control" placeholder="Search..."
              onChange={this.handleChange} />
              <input type="submit" className="btn btn-primary" value="Submit" />
          </form>

        );
    }

}

My_form.propTypes = {
    /**
     * @property {PropTypes.func} artistValue - Resets the 'value' in the state of App every time a letter is typed
     */
    artistValue: PropTypes.func,
    /**
     * @property {PropTypes.func} callback - Calls the ajax function onSubmit to retrieve song data of required artist
     */
    callback: PropTypes.func
}

export default My_form