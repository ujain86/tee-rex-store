import React from 'react'

function SearchBar(props) {

    const handleSearchInput = (e) => {
        
        props.setSearchInput(e.target.value);
    }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
    
  return (
    <div style={{display: 'flex', justifyContent: 'center'}} className='mb-4'>
        <form className="form-inline  my-2 my-lg-0" onSubmit={handleSubmit}>
            <input onChange={handleSearchInput} value={props.searchInput} className="form-control  mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{width: 400}} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        
    </div>
  )
}

export default SearchBar;