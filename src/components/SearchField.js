import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, IconButton, Popover } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortedProducts, setSortedProducts] = useState([]);
  const products = useSelector((state) => state.products.items);
  const navigate = useNavigate();

  useEffect(() => {
    const sorted = [...products].sort((a, b) => a.fields.name.localeCompare(b.fields.name));
    setSortedProducts(sorted);
  }, [products]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event, value) => {
    event.preventDefault();
    const searchValue = value || searchTerm;

    if (searchValue) {
      const filteredProducts = sortedProducts.filter(
        (product) => product.fields.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );

      if (filteredProducts.length > 0) {
        const productId = filteredProducts[0].sys.id;
        navigate(`/product/${productId}`);
      }
    }

    setAnchorEl(null);
    setSearchTerm('');
  };

  const handleSearchToggle = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const isPopoverOpen = Boolean(anchorEl);
  const popoverId = isPopoverOpen ? 'search-popover' : undefined;

  return (
    <>
      <IconButton
        onClick={handleSearchToggle}
        sx={{
          marginLeft: '8px' // Adjust the left margin to move the icon towards the left
        }}>
        <SearchIcon sx={{ fontSize: '2.4rem' }} />
      </IconButton>

      <Popover
        id={popoverId}
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}>
        <form onSubmit={handleSearchSubmit}>
          <Autocomplete
            options={sortedProducts}
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
      </Popover>
    </>
  );
};

export default SearchField;

// eslint-disable-next-line react/jsx-props-no-spreading