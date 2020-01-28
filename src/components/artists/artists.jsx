import React, { Component } from "react";
import Artist from "./artist/artist";
import axios from "axios";
import "./artists.css";

class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
  }

  componentDidMount() {
    let _this = this;
    axios.get("http://localhost:9000/artists/all").then(function(res) {
      _this.setState({ artists: res.data });
    });
  }

  render() {
    const {artists} = this.state;
    console.log(artists);
    return (
      <div className="all-artists">
        { artists ? artists.map(artist => (
          <Artist 
            key={artist._id}
            name={artist.name}
            bio={artist.bio}
            imageUrl={artist.imageUrl}
            memberSince={artist.memberSince.split("T")[0]}
            id={artist._id}
          ></Artist>
        )) : ''}
      </div>
    );
  }
}

export default Artists;
