import { useState } from 'react';

const useItems = (initalData = []) => {
  const [items, setItems] = useState(initalData);
  const [filteredItems, setFilteredItems] = useState(null);

  const addItem = (item) => setItems((items) => [...items, item]);

  const filterItems = (value) => {
    if (value.length < 1) return setFilteredItems(null);

    setFilteredItems(
      items.filter((item) => new RegExp(value, 'i').test(item.value)),
    );
  };

  return { items: filteredItems || items, addItem, filterItems };
};

export default useItems;
