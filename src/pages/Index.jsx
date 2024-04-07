import { useState } from "react";
import { Heading, UnorderedList, ListItem, Checkbox, Button, Center, Input } from "@chakra-ui/react";

const Index = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Do laundry", completed: false },
    { id: 3, text: "Clean the house", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newId = todos.length + 1;
      const newTodoItem = { id: newId, text: newTodo, completed: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  return (
    <>
      <title>My Todos</title>
      <Center>
        <Heading mb={4}>My Todo List</Heading>
      </Center>
      <UnorderedList>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <Checkbox isChecked={todo.completed}>{todo.text}</Checkbox>
          </ListItem>
        ))}
      </UnorderedList>
      <Input mt={4} value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" />
      <Button mt={2} onClick={handleAddTodo}>
        Add Todo
      </Button>
    </>
  );
};

export default Index;
