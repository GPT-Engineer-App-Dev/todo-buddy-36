import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Checkbox, Text, IconButton, Heading } from "@chakra-ui/react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  
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

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
  };

  const handleSaveTask = (index) => {
    const newTasks = tasks.map((task, i) => i === index ? { ...task, text: editText } : task);
    setTasks(newTasks);
    setEditIndex(null);
    setEditText("");
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
              {editIndex === index ? (
                <>
                  <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveTask(index)}
                  />
                  <IconButton
                    aria-label="Save task"
                    icon={<FaSave />}
                    onClick={() => handleSaveTask(index)}
                  />
                </>
              ) : (
                <>
                  <Checkbox isChecked={task.completed} onChange={() => handleToggleTask(index)}>
                    <Text as={task.completed ? "s" : undefined}>{task.text}</Text>
                  </Checkbox>
                  <HStack>
                    <IconButton
                      aria-label="Edit task"
                      icon={<FaEdit />}
                      onClick={() => handleEditTask(index)}
                    />
                    <IconButton
                      aria-label="Delete task"
                      icon={<FaTrash />}
                      onClick={() => handleDeleteTask(index)}
                    />
                  </HStack>
                </>
              )}
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;