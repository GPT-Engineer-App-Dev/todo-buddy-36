import { useState, useEffect } from "react";
import { Container, VStack, HStack, Input, Button, Checkbox, Text, IconButton, Heading, InputGroup, InputRightElement } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask.trim(), completed: false, dueDate }]);
      setNewTask("");
      setDueDate("");
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
          <InputGroup>
            <Input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              placeholder="Set due date"
            />
            <InputRightElement>
              <CalendarIcon color="gray.300" />
            </InputRightElement>
          </InputGroup>
          <Button colorScheme="purple" onClick={handleAddTask}>Add Task</Button>
        </HStack>
        <VStack width="100%" spacing={3}>
          {tasks.map((task, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Checkbox isChecked={task.completed} onChange={() => handleToggleTask(index)}>
                <Text as={task.completed ? "s" : undefined}>{task.text}</Text>
              {task.dueDate && (
                  <Text fontSize="sm" color="gray.500" ml={4}>
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </Text>
                )}
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
    </Container>
  );
};

export default Index;