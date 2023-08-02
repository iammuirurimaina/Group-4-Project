import React, { useState } from "react";

function SearchBar(){
    {/*const [searchData, setSearchData] = useState("")
    function handleSearch (searchDataId){
        const dataArray = searchData.filter((newSearchData) => {return(newSearchData.id===searchDataId)})
    setSearchData(dataArray)*/}
    
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