import React from "react";
import { Link, Text, Box } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box boxShadow="md" p="2" m="2">
      <Text>
        Copyright © 2021
        <Link to="/" as={ReachLink}>
          Cryptodome Inc.
        </Link>{" "}
        <br />
        All Rights Reserved.
      </Text>

      <Box display="flex" justifyContent="space-around">
        <Link
          to="/"
          _hover={{ color: "darkgrey", padding: "10px" }}
          as={ReachLink}
          m="2"
          border="1px solid white"
          padding="10px"
        >
          Home
        </Link>
        <Link
          to="/Cryptocurrencies"
          _hover={{ color: "darkgrey", padding: "10px" }}
          as={ReachLink}
          m="2"
          border="1px solid white"
          padding="10px"
        >
          Exchanges
        </Link>
        <Link
          to="/News"
          _hover={{ color: "darkgrey", padding: "10px" }}
          as={ReachLink}
          m="2"
          border="1px solid white"
          padding="10px"
        >
          News
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
