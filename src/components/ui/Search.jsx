import React, {useState} from 'react';

const Search = ({getQuery}) => {
    const [searchText, setSearchText] = useState("");
    

    const onChange = (query) => {
        setSearchText(query);
        getQuery(searchText);
    }
    
    
    return (
        <section className="search">
            <form>

            <input 
                type="text" 
                className="form-control" 
                placeholder="Search Characters"
                value={searchText}
                onChange={e => 
                    onChange(e.target.value)
                    
                    
                }
                autoFocus
                
            />

            </form>
        </section>
    )
}

export default Search;
