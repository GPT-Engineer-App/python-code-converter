import { useState } from "react";
import { Box, Button, Container, Heading, Input, Textarea, VStack, Text, useToast } from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const toast = useToast();

  const handleConvert = () => {
    // This is a placeholder for the conversion logic
    // In a real scenario, you would have a conversion function here
    setOutputCode(`# Converted Python code\nprint("Hello, Python!")`);

    toast({
      title: "Conversion Successful",
      description: "The code has been converted to Python.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          Code Converter
        </Heading>
        <Text>Convert code from any language to Python</Text>

        <Textarea placeholder="Enter your code here..." value={inputCode} onChange={(e) => setInputCode(e.target.value)} size="lg" height="200px" />

        <Button rightIcon={<FaExchangeAlt />} colorScheme="teal" onClick={handleConvert}>
          Convert to Python
        </Button>

        <Textarea placeholder="Your Python code will appear here..." value={outputCode} isReadOnly size="lg" height="200px" />
      </VStack>
    </Container>
  );
};

export default Index;
