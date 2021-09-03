import React, {Component} from 'react'; 

class Text extends Component {

    
    render(){
        

        return(
            <p id='text'>{this.props.quote}</p>
            ) 
    }
    

    
}


export default Text; 