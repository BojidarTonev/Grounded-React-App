import React, {Component} from 'react'
import './event-details-modal.css';

class EventDetailsModal extends Component {
    constructor(props){
        super(props)
    }

    render(){
        if(!this.props.show) {
            return null;
        }

        return(
            <div className="event-details-modal-wrapper" id="event-modal">{this.props.children}</div>
        )
    }
}

export default EventDetailsModal