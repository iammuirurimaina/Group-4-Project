import React from "react";

function SearchBar(){
return(
    <div>
        <h1>SEARCH FOR THE TRENDING NEWS!</h1>
        <form>
            <label htmlFor='search'>Search News:</label>
            <input type="search" id="gsearch" name="search"/>
            <input type="submit" value="submit"/>
        </form>
    </div>
)
}

export default SearchBar;