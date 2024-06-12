import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="2xl" mb={4}>About</Heading>
      <Text fontSize="lg">
        This is a simple todo application built with React and Chakra UI.
      </Text>
    </Box>
  );
};

export default About;