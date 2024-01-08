import { Box, Text, Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import NavBar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Box m={10}>
        <Box
          h="10rem"
          boxShadow={"md"}
          borderBottom={"1px"}
          borderColor={"gray.300"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="white"
          p={4}
        >
          <RouteLink to="/mfis">
            <Link color={"black"}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                My Friend is Sunshine
              </Text>
            </Link>
          </RouteLink>
        </Box>
        <Box
          h="10rem"
          boxShadow={"md"}
          borderBottom={"1px"}
          borderColor={"gray.300"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="white"
          p={4}
          mt={3}
        >
          <RouteLink to="/awal">
            <Link color={"black"}>
              <Text fontSize={"2xl"} fontWeight={"bold"}>
                _Awal Mula
              </Text>
            </Link>
          </RouteLink>
        </Box>
      </Box>
    </>
  );
};

export default Home;
