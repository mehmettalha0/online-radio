import React, { useEffect, useState } from "react";
import { DATA } from "./Data";
import "./App.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./img/superfm.png";

function App() {
  const [url, setUrl] = useState(null);
  return (
    <>
      <div className="top">
        <div className="header">Mehmet Talha - Online Radio</div>
        <div className="App">
          {DATA.map((item) => {
            return (
              <div className="null">
                <div className="radio-image">
                  <a
                    onClick={() => {
                      setUrl(item.url);
                      var yazi = document.getElementById("yazi");
                      yazi.innerHTML = `Şu anda Oynatılıyor: <b>${item.name}</b>`;
                    }}
                    className="radio-station"
                  >
                    <img src={item.image} />
                  </a>
                </div>
                <div className="radio-name-list">
                  <h1>{item.name}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h1 id="yazi" className="radio-name">
        <b>Şu anda bir şey oynamıyor</b>
      </h1>
      <div className="player">
        <AudioPlayer
          autoPlay
          src={url}
          showJumpControls={false}
          showDownloadProgress={false}
          showFilledProgress={false}
        />
      </div>
    </>
  );
}

export default App;
