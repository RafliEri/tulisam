import { ChakraProvider, extendTheme, Box, Text, Link } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import NavBar from "../components/Navbar";

const theme = extendTheme({
  fonts: {
    body: "DM Sans, sans-serif",
  },
});

const Home = () => {
  return (
    <ChakraProvider theme={theme}>
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
                <Text fontSize={"2xl"} fontWeight={"bold"} fontFamily="body">
                  My Friend is Sunshine
                </Text>
              </Link>
            </RouteLink>
          </Box>
          {/* <Box
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
        </Box> */}
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
            <RouteLink to="/kytb">
              <Link color={"black"}>
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                  Kerinduan yang tak <em>bertuan</em>
                </Text>
              </Link>
            </RouteLink>
          </Box>
        </Box>
      </>
    </ChakraProvider>
  );
};

export default Home;
