import React, { Component } from 'react';
import './App.css';
import './vendor/bootstrap/css/bootstrap.css'
import './heroic-features.css'
import $ from 'jquery';
import Song from './Song.js';
import MyButton from './MyButton.js';
import My_form from './My_form.js';

/**
* @description This is my parent component, appended to the root div, returns the entire music store.
*
* @property {element}
*/

class App extends Component {

/**
 * constructor
 * @param {object} props
 */
    constructor(props){
      super(props);
      this.changeState=this.changeState.bind(this);
      this.changeArtistState=this.changeArtistState.bind(this);
      this.getAJAX=this.getAJAX.bind(this);

    /**
     * @type {object}
     */
      this.state = {
    /**
     * @property {number} sortType - 0=default, 1='A-Z', 2='Z-A'
     */
        sortType: 0,
    /**
     * @property {array} songs - All data retrieved by ajax
     */
        songs: [],
    /**
     * @property {string} value - Value that exists in the search input text box
     */
        value: "",
    /**
     * @property {string} artist - Name of the artist of the data retrieved by ajax
     */
        artist: ""
      };
    }

    /**
     * @param {object} e - An event object on clicking the Submit button.
     */
      getAJAX(e){
        e.preventDefault();
        var search = this.state.value;
        var url = "https://itunes.apple.com/search?term="+search+"&limit=8&entity=song";
        $.ajax({
          url: url,
          dataType: 'json',
          cache: false,
          success: function(data){
            this.setState({songs: data.results,
                           artist: data.results[0].artistName});
          }.bind(this),
          error: function(error){
            alert(error);
          }.bind(this)
        });
      }

    /**
     * @param {string} artistValue - Value that exists in the input box at anytime.
     */
      changeArtistState(artistValue){
        this.setState({value: artistValue});
      }

    /**
     * @param {object} button - An event object on clicking the sorting buttons.
     */
      changeState(button){
        button.preventDefault();
        var target = button.target;
        var id = target.id;
        if (id == "A-Z") {
          this.setState({sortType: 1});
        }
        else {
          this.setState({sortType: 2});
        }
      };


    render(){
      var songList = this.state.songs;
      let sortButton = this.state.sortType;
      if (sortButton != 0){
        songList.sort(function(a,b){
          if (sortButton == 1) {
            if (a.trackName<b.trackName) return -1;
            if (a.trackName>b.trackName) return 1;
            return 0;
          }
          else {
            if (a.trackName<b.trackName) return 1;
            if (a.trackName>b.trackName) return -1;
            return 0;

          }
        });
      }

    /**
     * @param {object} tracks - A dictionary of data called from iTunes.
     */
      const sortedList = songList.map(function(tracks){
        return <Song link={tracks.previewUrl} key={tracks.trackId} {...tracks}></Song>;
      });

      return (
        <div className="container">
          <div className="row text-center">
            <My_form artistValue={this.changeArtistState} callback={this.getAJAX}></My_form>
          </div>

          <div className="row text-center">
             <h2 className="title">{"Showing songs by "+this.state.artist}</h2>
          </div>

          <div className="row text-center">
            <div className="col-md-6">
              <MyButton link="#" buttonId="A-Z" change={this.changeState} text="Sort A-Z"></MyButton>
            </div>
            <div className="col-md-6">
              <MyButton link="#" buttonId="Z-A" change={this.changeState} text="Sort Z-A"></MyButton>
            </div>
          </div>
          <div className="row text-center">
            {sortedList}
          </div>
        </div>
      );
    }
}

export default App;