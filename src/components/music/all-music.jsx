import React, {Component} from "react";
import Tracks from './tracks'
import LoadingSpinner from '../../shared/loading-spinner/loading-spinner'
import MusicSearchForm from './music-search-form/music-search-form'
import "./all-music.css";
import "../../shared/styles/description.css";

class AllMusic extends Component {
  constructor(props){
    super(props)

    this.state = {
      tracks: [],
      loading: false
    }
  }

  onDataGot = function(data) {
    let _this = this;
    setInterval(function(){
      _this.setState({tracks: data, loading: false})
    }, 2000)
  }

  onSearchClick = function(e) {
    this.setState({loading: true})
  }

  render(){
    const {tracks, loading} = this.state;
    return (
      <div className='all-music'>
          <MusicSearchForm onDataGot={this.onDataGot.bind(this)} onSearchClick={this.onSearchClick.bind(this)} />

          <div className="music-content">
            {loading ? <LoadingSpinner /> : <Tracks tracks={tracks} /> }
          </div>
        </div>
    );
  }
  
}

export default AllMusic;
