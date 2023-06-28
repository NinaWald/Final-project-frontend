import React, { useState } from 'react';
import { TextField, Autocomplete, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const products = useSelector((state) => state.products.items);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event, value) => {
    event.preventDefault();
    const searchValue = value || searchTerm;

    if (searchValue) {
      const filteredProducts = products.filter(
        (product) => product.fields.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );

      if (filteredProducts.length > 0) {
        const productId = filteredProducts[0].sys.id;
        navigate(`/product/${productId}`);
      }
    }
  };

  const handleSearchToggle = () => {
    setIsSearchVisible((prevIsSearchVisible) => !prevIsSearchVisible);
  };

  return (
    <>
      <IconButton
        onClick={handleSearchToggle}
        sx={{
          marginLeft: '8px' // Adjust the left margin to move the icon towards the left
        }}>
        <SearchIcon sx={{ fontSize: '2.4rem' }} />
      </IconButton>
      {isSearchVisible && (
        <form onSubmit={handleSearchSubmit}>
          <Autocomplete
            options={products}
            getOptionLabel={(option) => option.fields.name}
            renderInput={(params) => (
              <TextField
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                type="search"
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
                sx={{ width: 200 }} />
            )}
            onChange={(event, value) => handleSearchSubmit(event, value?.fields.name)} />
        </form>
      )}
    </>
  );
};

export default SearchField;

// eslint-disable-next-line react/jsx-props-no-spreading