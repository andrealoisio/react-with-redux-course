import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <>Select a song</>;
  }
  return (
    <div>
      <h3>Detail for:</h3>
      <p>
        Title: {song.title}
        <br />
        Durations: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("Details", state.selectedSong);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
