import React, { useState } from "react";
import { Container,Typography,TextField,Button,List,ListItem,Checkbox,IconButton,Box,} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  //formsubmit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      // Add new todo to the list
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
    console.log("Todos:", todos); // check todos array
  };

  //checbox function
  const handleCheckboxChange = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  //delete function
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_curr, idx) => idx !== index);
    setTodos(updatedTodos);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Typography variant="h3" sx={{ mb: 2 }}>
        Todo List
      </Typography>
      <form display="flex" alignItems="center" onSubmit={handleFormSubmit}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
          sx={{
            width: {
              xs: "200px",
              sm: "300px",
            },
            mb: 2,
          }}
        />
        <Button variant="outlined" sx={{ mt: 1 }} type="submit">
          Add
        </Button>
      </form>
      <List sx={{ mt: 2 }}>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid grey",
              p: 1,
              borderRadius: 1,
              mb: 2,
              width: {
                xs: "250px",
                sm: "300px",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Checkbox
                checked={todo.completed}
                onChange={() => handleCheckboxChange(index)}
                sx={{ marginRight: 2 }}
              />
              <Typography
                variant="body1"
                sx={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </Typography>
            </Box>
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(index)}
              sx={{ color: "error.main" }}
            >
              <DeleteForeverIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
