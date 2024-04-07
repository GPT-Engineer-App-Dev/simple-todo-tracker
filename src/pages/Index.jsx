import { Heading, UnorderedList, ListItem, Checkbox, Button, Center } from "@chakra-ui/react";

const Index = () => {
  return (
    <>
      <title>My Todos</title>
      <Center>
        <Heading mb={4}>My Todo List</Heading>
      </Center>
      <UnorderedList>
        <ListItem>
          <Checkbox>Buy groceries</Checkbox>
        </ListItem>
        <ListItem>
          <Checkbox>Do laundry</Checkbox>
        </ListItem>
        <ListItem>
          <Checkbox>Clean the house</Checkbox>
        </ListItem>
      </UnorderedList>
      <Button mt={4}>Add Todo</Button>
    </>
  );
};

export default Index;
