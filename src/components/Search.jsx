import React, { useState, useEffect } from "react";
import './styles.css'
const Search = ({posts, setPosts}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const searchFunc = (posts, searchTerm) => {
        const result = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
        return result;
    }

    useEffect(() => {
        setPosts(searchFunc(posts, searchTerm));
    }, [searchTerm]);
    
    return (
        <form>
            <span><label className='search' htmlFor='search'>Filter By Post Titles</label>
            <input type='text' name='search' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/></span>
        </form>
    )
}

export default Search