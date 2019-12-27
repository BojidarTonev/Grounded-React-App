import React from "react";
import Track from "./track/track";

function Tracks(props) {
    let tracks = props.tracks.map(track => (
        <Track
          key={track._id}
          name={track.name}
          author={track.author}
          album={track.album}
          duration={track.duration}
          imageUrl={track.imageUrl}
        ></Track>
    ))

    return tracks
}

export default Tracks;
