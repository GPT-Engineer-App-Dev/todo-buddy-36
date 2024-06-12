import { Box, Flex, Link, useColorModeValue, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>TodoApp</Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/about">About</Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;