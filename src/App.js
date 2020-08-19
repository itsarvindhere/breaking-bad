import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import axios from "axios";

import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid.jsx";
import Search from "./components/ui/Search";
import Footer from "./components/ui/Footer";
import QuotesGrid from "./components/quotes/QuotesGrid";;

const App = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("");



    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get(`https://breakingbadapi.com/api/characters?name=${query}`);
                setItems(res.data);
                setIsLoading(false);
            }
            catch(err) {
                console.log(err)
            }
        }
        fetchItems();
    }, [query]);

    

    return (
        

        <Router>
        <Switch>

        
            <Route path="/" exact> 

            <div>
            <a className="quotes-link" href="/quotes"> Breaking Bad Quotes </a>
           <Header /> 
           <Search 
                getQuery={(query) => {
                    setQuery(query);
                }}
           />

           <CharacterGrid 
               items={items}
               isLoading={isLoading}
           />
        </div>

            </Route>

            <Route path="/quotes">
                <QuotesGrid />
            </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
