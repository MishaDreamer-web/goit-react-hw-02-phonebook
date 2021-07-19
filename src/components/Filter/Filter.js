import PropTypes from 'prop-types';

import styles from './Filter.module.scss';

const Filter = ({ filter, onChange }) => {
  // console.log(filter);
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter name for Search"
      className={styles.Input}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
