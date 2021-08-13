import React, { Component } from 'react';
import flvJs from 'flv.js';
import './index.css'

class Demo extends Component {
  state= {
    video:{
      video_url:"https://s1.sonkwo.com/ls-KzR9iZO8zIu3AtVvD0yeGJhZV"
    }
  }
  flvRef=React.createRef()
  videoRef=React.createRef()
  componentDidMount() {
    // if(flvJs.isSupported) {
    // this.flvRef.current = flvJs.createPlayer({
    //   type: 'flv',
    //   isLive: true,
    //   cors: true,
    //   hasVideo: true,
    //   url:"https://s1.sonkwo.com/ls-KzR9iZO8zIu3AtVvD0yeGJhZV"
    // })
    // }
    console.log(this.videoRef.current);
  }
  render() {
    return (
      <div>
       <div className="live">
       <video ref={this.videoRef} poster="none" id="myVideo" autoplay width="800" height="800" controls="controls" autoplay>
       <source src={this.state.video.video_url} type="video/mp4"/>
       您的浏览器不支持 video 标签。
       </video>
       </div>
      </div>
    );
  }
}

export default Demo;