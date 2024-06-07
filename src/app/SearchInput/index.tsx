import { FC } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styles from './page.module.css';

type ISearchInput = {
  setInput: (e: any) => void;
  handleSearch: () => void;  
}

const SearchInput: FC<ISearchInput> = ({ setInput, handleSearch}) => {
  return (
    <Paper
      component="form"
      className={styles.container}
    >
      <InputBase
        className={styles.input}
        placeholder="Buscar un articulo"
        inputProps={{ 'aria-label': 'Buscar un articulo' }}
        onChange={(e) => setInput(e?.target.value)}
      />
      <IconButton type="button" className={styles.button} aria-label="search" onClick={() => handleSearch()} >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;
