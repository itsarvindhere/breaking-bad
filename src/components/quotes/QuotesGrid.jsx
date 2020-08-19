import React, {useState, useEffect} from 'react'
import axios from "axios";
import Spinner from "../ui/Spinner";
import Quote from "./Quote";

const QuotesGrid = () => {

    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchQuotes = async() => {
        setIsLoading(true);
        try {
            const res = await axios.get(`https://breakingbadapi.com/api/quotes`);
            console.log(res.data);
            setQuotes(res.data);
            setIsLoading(false);
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchQuotes();
    }, []);

    
    return isLoading ? (<Spinner />) : (
        <section className="quotes">
        <a className="quotes-link" href="/">Check the Cast</a> 
        <h1 className="quotes-heading"> Breaking Bad Quotes </h1>


        <div class="quotes-container">
        {quotes.map(quote => {
            return (
                <Quote quote={quote}/>
            )
            })}
        </div>
             
        </section>
        
        
    )
}

export default QuotesGrid
