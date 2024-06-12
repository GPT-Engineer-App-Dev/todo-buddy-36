import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box 
      as="footer" 
      width="100%" 
      py={4} 
      bg={useColorModeValue("gray.100", "gray.900")} 
      position="fixed" 
      bottom={0}
      textAlign="center"
    >
      <Text>© 2023 Todo Application</Text>
    </Box>
  );
}

export default Footer;