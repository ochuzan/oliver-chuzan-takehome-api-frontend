import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

function Searchbar({searchInput, setSearchInput}) {

    const updateSearch = (e) => {
      setSearchInput(e.target.value);
    }

    return (
      <Paper
      variant='outlined'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, margin: "0 auto 10px", border: "2px solid black" }}
      >
        <SearchIcon />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Restaurants"
          value={searchInput}
          onChange={updateSearch}
        />
      </Paper>
    )
}

export default Searchbar;