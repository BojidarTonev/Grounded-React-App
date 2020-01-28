import React, { Component } from "react";
import axios from "axios";
import "./artist-details.css";

class ArtistDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        artist: {}
    };
  }

  componentDidMount() {
    let _this = this;
    axios.get("http://localhost:9000/artists/all").then(function(res) {
      _this.setState({ artists: res.data });
    });
  }

  render() {
    const {artist} = this.state;
    return (
      <div className="artist-details">
       
      </div>
    );
  }
}

export default ArtistDetails;
