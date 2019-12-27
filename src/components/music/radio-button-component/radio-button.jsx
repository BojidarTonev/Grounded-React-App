import React,{Component} from 'react';
import './radio-button.css'

class RadioButton extends Component {
    constructor(props){
        super(props)
        this.state= {
            active: false
        }
    }

    toggleClass() {
        this.setState({active:!this.state.active})
    }

    render(){
        let {title} = this.props;
        let radioClass = ["radio-button"];
        if(this.state.active) {
            radioClass.push("declined")
        }

        return(
            <div className={radioClass.join(' ')} onClick={this.toggleClass.bind(this)}>
                <input type="radio" value="artists" name="artists" id="artists-radio"/>
                <label for="artists-radio">{title}<i className={this.state.active ? "fas fa-times" : "fas fa-check"}></i></label>
            </div>
        )
    }
}

export default  RadioButton