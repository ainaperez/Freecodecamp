import React, {Component} from 'react';
import axios from 'axios'

import Text from '../Components/Text/Text';
import Author from '../Components/Author/Author';
import TweetQuote from '../Components/TweetQuote/TweetQuote';
import NewQuote from '../Components/NewQuote/NewQuote';
import classes from './QuoteBox.module.css'


class QuoteBox extends Component{

    state={
        quotes: null,
        quote: null,
       
    }
    
    componentDidMount(){
        
        axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
        .then(response => {
           this.setState({quotes: response.data.quotes})  ; 
           console.log(response)
            const randomIndex = Math.floor(Math.random()*this.state.quotes.length+1);
            this.setState({quote: this.state.quotes[randomIndex]})
            console.log(this.state.quote)

        })
    }

    newQuoteHandler = () => {
        const randomIndex = Math.floor(Math.random()*this.state.quotes.length+1);
            this.setState({quote: this.state.quotes[randomIndex]})
            console.log(this.state.quote)

    }

    

    render(){
        
        let loadedQuote = <p>Loading...</p>

        
        if(this.state.quote !== null){
           
            const twitter = 'twitter.com/intent/tweet?text='+ encodeURIComponent(this.state.quote.quote + "-' "+ this.state.quote.author + " '.")

           loadedQuote= (
            <div className={classes.wrapper}>
                <div id='quote-box' className={classes.quoteBox}>
                <Text quote={this.state.quote.quote}/>
                <Author author={this.state.quote.author}/>
                    <div>
                        <TweetQuote link={twitter} />
                        
                        <NewQuote clicked={this.newQuoteHandler}/>
                    </div>
                </div>
            </div>
            )
        }
        
        return loadedQuote;
        
    }
 
};

export default QuoteBox;

