import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Checkbox, Text, IconButton, Heading, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask.trim(), completed: false }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleTask = (index) => {
    const newTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task);
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" mb={6}>Todo Application</Heading>
        <HStack width="100%">
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
          <Button colorScheme="green" onClick={handleAddTask}>Add Task</Button>
        </HStack>
        <VStack width="100%" spacing={3}>
          {tasks.map((task, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Checkbox isChecked={task.completed} onChange={() => handleToggleTask(index)}>
                <Text as={task.completed ? "s" : undefined}>{task.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => handleDeleteTask(index)}
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
      <Box as="footer" width="100%" textAlign="center" py={4} mt={8} borderTop="1px solid #e2e8f0">
        © 2023 Todo Application
      </Box>
    </Container>
  );
};

export default Index;