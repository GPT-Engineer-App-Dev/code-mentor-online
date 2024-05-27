import { Box, Button, Container, Flex, Heading, HStack, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="blue.700" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">CodeMaster</Heading>
          <HStack spacing={8}>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box bg="blue.500" color="white" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to CodeMaster</Heading>
        <Text fontSize="xl" mb={8}>Learn to code from the best in the industry</Text>
        <Button colorScheme="teal" size="lg">Sign Up Now</Button>
      </Box>

      {/* Courses Section */}
      <Box py={20} px={8}>
        <Heading as="h3" size="xl" textAlign="center" mb={10}>Our Courses</Heading>
        <Flex wrap="wrap" justify="center" spacing={8}>
          <Box bg="gray.100" p={6} m={4} borderRadius="md" boxShadow="md" width="300px">
            <Heading as="h4" size="md" mb={4}>Introduction to Python</Heading>
            <Text mb={4}>Learn the basics of Python programming.</Text>
            <Button colorScheme="teal">Learn More</Button>
          </Box>
          <Box bg="gray.100" p={6} m={4} borderRadius="md" boxShadow="md" width="300px">
            <Heading as="h4" size="md" mb={4}>Web Development Bootcamp</Heading>
            <Text mb={4}>Become a full-stack web developer.</Text>
            <Button colorScheme="teal">Learn More</Button>
          </Box>
          <Box bg="gray.100" p={6} m={4} borderRadius="md" boxShadow="md" width="300px">
            <Heading as="h4" size="md" mb={4}>Data Science with R</Heading>
            <Text mb={4}>Master data analysis and visualization.</Text>
            <Button colorScheme="teal">Learn More</Button>
          </Box>
        </Flex>
      </Box>

      {/* About Section */}
      <Box bg="gray.50" py={20} px={8}>
        <Heading as="h3" size="xl" textAlign="center" mb={10}>About Us</Heading>
        <Text fontSize="lg" textAlign="center" maxW="800px" mx="auto">
          CodeMaster is dedicated to providing high-quality coding education to students all over the world. Our mission is to empower individuals with the skills they need to succeed in the tech industry.
        </Text>
      </Box>

      {/* Contact Section */}
      <Box py={20} px={8}>
        <Heading as="h3" size="xl" textAlign="center" mb={10}>Contact Us</Heading>
        <VStack spacing={4} maxW="600px" mx="auto">
          <Input placeholder="Your Name" size="lg" />
          <Input placeholder="Your Email" size="lg" />
          <Textarea placeholder="Your Message" size="lg" />
          <Button colorScheme="teal" size="lg">Send Message</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;