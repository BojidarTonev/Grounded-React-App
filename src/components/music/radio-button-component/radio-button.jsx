import React,{Component} from 'react';
import './radio-button.css'

class RadioButton extends Component {
    constructor(props){
        super(props)
        this.state= {
            active: false
        }
    }

    toggleClass(e) {
        let radButton = e.currentTarget.children[0]; 
        radButton.checked = !radButton.checked;
        this.setState({active: radButton.checked});
        this.props.styleChangedHandler();
    }

    render(){
        let {title, value, name, styleChangedHandler} = this.props;
        styleChangedHandler();
        return(
            <div className="radio-button declined" onClick={this.toggleClass.bind(this)}>
                <input type="radio" value={value} name={name} />
                <label for="artists-radio">{title}<i className="fas fa-times"></i></label>
            </div>
        )
    }
}

export default  RadioButton