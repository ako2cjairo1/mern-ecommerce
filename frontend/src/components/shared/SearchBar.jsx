import '../../assets/css/SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

export const SearchBar = ({ searchCriteria, handleInput, handleSearch }) => {
	return (
		<div className='search'>
			<div className='search-icon'>
				<SearchIcon />
			</div>
			<InputBase
				className='search-bar'
				placeholder='Search…'
				inputProps={{ 'aria-label': 'search' }}
				onChange={handleInput}
				value={searchCriteria}
				onKeyPress={handleSearch}
			/>
		</div>
	);
};
