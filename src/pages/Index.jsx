import { Heading, UnorderedList, ListItem } from "@chakra-ui/react";

const Index = () => {
  return (
    <>
      <title>My Todos</title>
      <Heading mb={4}>My Todo List</Heading>
      <UnorderedList>
        <ListItem>Buy groceries</ListItem>
        <ListItem>Do laundry</ListItem>
        <ListItem>Clean the house</ListItem>
      </UnorderedList>
    </>
  );
};

export default Index;
