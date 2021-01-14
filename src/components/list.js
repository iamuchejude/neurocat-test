import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Items, Item, Message } from '../styles';

const List = ({ items }) => (
  <Fragment>
    {items.length < 1 ? (
      <Message>😰 NO ITEMS.</Message>
    ) : (
      <Items>
        {items.map(({ value, id }) => (
          <Item key={id}>{value}</Item>
        ))}
      </Items>
    )}
  </Fragment>
);

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default List;
