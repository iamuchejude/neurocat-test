import PropTypes from 'prop-types';
import { Input } from '../styles';

const Search = ({ onInput, name }) => (
  <Input
    placeholder="Search for items...."
    onInput={onInput}
    type="text"
    name={name}
    id={name}
  />
);

Search.propTypes = {
  onInput: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Search;
