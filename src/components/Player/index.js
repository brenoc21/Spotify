import React from "react";
import {
  ButtonContainer,
  CenterContent,
  LeftContent,
  PlayerBG,
  RangeInput,
  RightContent,
} from "./styles";
import play from "../../assets/play.svg";
import next from "../../assets/next.svg";
import randomSong from "../../assets/randomSong.svg";
import repeat from "../../assets/repeat.svg";
import back from "../../assets/back.svg";
import picture from "../../assets/Zoro.png";
import like from "../../assets/like.svg";
import expand from "../../assets/expand.svg";
import mic from "../../assets/mic.svg";
import radio from "../../assets/radio.svg";
import volume from "../../assets/volume.svg";
import queue from "../../assets/queue.svg";
import expandImg from "../../assets/expandImg.svg";
export default function Player({ picture }) {
  return (
    <PlayerBG>
      <LeftContent>
        <img src={picture} alt="Song Image" className="songImage" />
        <div className="aboutSong">
          <h1 className="title">Ronin</h1>
          <h2 className="artist">Zoro</h2>
        </div>
        <img className="like" src={like}></img>
        <img className="like" src={expandImg}></img>
      </LeftContent>
      <CenterContent>
        <ButtonContainer>
          <button className="control">
            <img src={randomSong} />
          </button>
          <button className="control">
            <img src={back} />
          </button>
          <button className="play">
            <img src={play} />
          </button>
          <button className="control">
            <img src={next} />
          </button>
          <button className="control">
            <img src={repeat} />
          </button>
        </ButtonContainer>
        <RangeInput type="range"></RangeInput>
      </CenterContent>
      <RightContent>
        <img src={mic}></img>
        <img src={queue}></img>
        <img src={radio}></img>

        <img src={volume}></img>
        <div className="volumeRange">
          <RangeInput type="range"></RangeInput>
        </div>
        <img src={expand}></img>
      </RightContent>
    </PlayerBG>
  );
}
