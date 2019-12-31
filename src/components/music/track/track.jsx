import React, {Component} from 'react'
import './track.css'

class Track extends Component {
    constructor(props){
        super(props)

        this.state = {
            isPLaying: false,
            seconds: 0
        }
        this.tick = this.tick.bind(this);
    }

    tick(){
    this.interval = setInterval(() => {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1
        }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    toggleIconClick() {
        this.setState({isPLaying: !this.state.isPLaying})
        if(this.state.seconds > 0) {
            this.setState({seconds: 0});
            clearInterval(this.interval);
        } else {
            this.tick();
        }

    }

    render(){
        return( 
            <span className="track-card-wrapper">
                <div className="author-name">{this.props.author}</div>
                <div className="track-card">
                    <div className="track-info-wrapper">
                            <i onClick={this.toggleIconClick.bind(this)} className={this.state.isPLaying ? 'fas fa-play play' : 'fas fa-pause'}></i>
                            <span>{this.props.name}</span> || <span><small>{this.props.album}</small></span>
                    </div>
                    <div className="line"></div>
                    <div className="song-duration">{this.state.seconds}/{this.props.duration}</div>
                </div>
            </span>
            )
    }
    
}

export default Track