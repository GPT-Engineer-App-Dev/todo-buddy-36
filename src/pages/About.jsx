import { Box, Heading, Text, Divider, List, ListItem } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="2xl" mb={4}>About</Heading>
      <Text fontSize="lg" mb={4}>
        This is a simple todo application built with React and Chakra UI. Our goal is to help you stay organized and keep track of your tasks efficiently.
      </Text>
      <Divider my={4} />
      <Heading as="h2" size="xl" mb={4}>Features</Heading>
      <List spacing={3} mb={4}>
        <ListItem>👉 Easy to use interface</ListItem>
        <ListItem>👉 Add, edit, and delete tasks</ListItem>
        <ListItem>👉 Mark tasks as completed</ListItem>
        <ListItem>👉 Persistent storage with local storage</ListItem>
        <ListItem>👉 Responsive design for mobile and desktop</ListItem>
      </List>
      <Divider my={4} />
      <Heading as="h2" size="xl" mb={4}>Technologies Used</Heading>
      <Text fontSize="lg" mb={4}>
        This application is built using the following technologies:
      </Text>
      <List spacing={3} mb={4}>
        <ListItem>⚛️ React - A JavaScript library for building user interfaces</ListItem>
        <ListItem>💅 Chakra UI - A simple, modular, and accessible component library</ListItem>
        <ListItem>📂 Local Storage - To store tasks persistently in the browser</ListItem>
      </List>
      <Divider my={4} />
      <Heading as="h2" size="xl" mb={4}>Future Improvements</Heading>
      <Text fontSize="lg">
        We are constantly working to improve the application. Here are some of the features we plan to add in the future:
      </Text>
      <List spacing={3} my={4}>
        <ListItem>🔍 Search functionality to find tasks quickly</ListItem>
        <ListItem>📅 Due dates and reminders</ListItem>
        <ListItem>📊 Analytics to track your task completion trends</ListItem>
        <ListItem>🌐 Syncing tasks across multiple devices</ListItem>
      </List>
    </Box>
  );
};

export default About;