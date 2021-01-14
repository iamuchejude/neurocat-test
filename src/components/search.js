import PropTypes from 'prop-types';
import { Input } from '../styles';

const Search = ({ onInput }) => (
  <Input onInput={onInput} placeholder="Search for items...." />
);

Search.propTypes = {
  onInput: PropTypes.func.isRequired,
};

export default Search;
