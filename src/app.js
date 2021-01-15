import { useItems } from './hooks';
import { List, Search, Plus } from './components';
import Styles, { Container, Main, Header, Button, Label } from './styles';
import { debounce, getRandomInt } from './utils';
import data from './data.json';

const initalData = [
  { value: 'Beans', id: 24323 },
  { value: 'Rice', id: 22393 },
];

const App = () => {
  const { items, filterItems, addItem } = useItems(initalData);

  const handleFilter = (event) => {
    debounce(filterItems)(event.target.value.trim());
  };

  const handleAddItem = () => {
    const value = data[getRandomInt(0, data.length)];
    const id = getRandomInt(11111, 99999);
    addItem({ id, value });
  };

  return (
    <Container>
      <Styles />

      <Header>
        <Label>
          <Search onInput={handleFilter} name="search" />
        </Label>

        <Button aria-label="add item" onClick={handleAddItem}>
          <Plus />
        </Button>
      </Header>

      <Main>
        <List items={items} />
      </Main>
    </Container>
  );
};

export default App;
