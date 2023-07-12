import { InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useState } from 'react'

const SearchBar: React.FC = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <TextField
            label="TextField"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            color='secondary'
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search color='secondary' />
                    </InputAdornment>
                ),
            }}
            variant="standard"
            fullWidth
            sx={{ maxWidth: 600 }}
        />
    )
}

export default SearchBar