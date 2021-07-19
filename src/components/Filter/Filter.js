import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  // console.log(filter);
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter name for Search"
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
