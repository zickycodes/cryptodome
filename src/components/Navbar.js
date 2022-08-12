import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Box>
          {" "}
          <Link to="/" as={ReachLink}>
            CryptoDome
          </Link>
        </Box>
        <Box display="flex">
          <Link to="/" as={ReachLink}>
            Hompaage
          </Link>
          <Link to="/Cryptocurrencies" as={ReachLink}>
            {" "}
            Cryptocurrencies
          </Link>
          <Link to="/News" as={ReachLink}>
            News
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
