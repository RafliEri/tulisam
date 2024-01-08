import { Link as RouteLink, useLocation } from "react-router-dom";
import { Flex, Text, Link } from "@chakra-ui/react";

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <Flex
        boxShadow={"md"}
        borderBottom={"1px"}
        borderColor={"gray.300"}
        alignItems="center"
        justifyContent="space-between"
        bg="white"
        p={4}
      >
        <Text>
          <RouteLink to="/">
            <Link color={"black"}>
              <Text fontSize={"2xl"} fontWeight={"bold"} as="u">
                DIKALA KATA
              </Text>
              <br></br>
              <Text as="i" pt={20}>
                Di kala kata diri bercerita tentang dunia ini, fana dan
                berirama.
              </Text>
            </Link>
          </RouteLink>
        </Text>

        {location.pathname !== "/" && (
          <Text>
            <RouteLink to="/">
              <Link
                color={"black"}
                _hover={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                <Text pr="20px" fontSize={"xl"}>
                  Home
                </Text>
              </Link>
            </RouteLink>
          </Text>
        )}
      </Flex>
    </>
  );
};

export default NavBar;
