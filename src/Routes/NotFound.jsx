import { useNavigate } from "react-router-dom";
import { Button, Heading, Flex } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Flex
      background={"white"}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      minHeight="100vh"
    >
      <Heading
        as="h1"
        color={"black"}
        fontSize="6xl"
        mt={8}
        fontFamily="body"
        textAlign="center"
        textShadow="2px 1px #ff0000"
      >
        404
      </Heading>
      <Heading
        as="h1"
        color={"blackAlpha.700"}
        fontSize="4xl"
        mb={4}
        fontFamily="monospace"
        textAlign="center"
      >
        Not Found
      </Heading>
      <Button onClick={() => navigate(-1)} mt={4} colorScheme="red">
        Back
      </Button>
    </Flex>
  );
};

export default NotFound;
