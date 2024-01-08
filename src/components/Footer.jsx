import React from "react";
import { Box, Image, Heading, Text, Link, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#f0f0f0" p="1.3rem" mt="10rem" textAlign="center">
      <Center>
        <Box className="profile" fontSize="1rem" mt="0.5rem">
          <Image ml={9} alt="Profile Picture" className="profile-picture" />
          <Heading as="h3" mb="0.5rem">
            Cinnamon
          </Heading>
          <Text mb="0.5rem">
            <Link href="mailto:rahhmariska@gmail.com">
              rahhmariska@gmail.com
            </Link>
          </Text>
          <Text>
            <Link href="https://www.instagram.com/___ezpz777/" target="_blank">
              <Image ml="4.3rem" alt="Instagram" className="social-icon" />
            </Link>
          </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default Footer;
