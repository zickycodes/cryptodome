import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
// import "./Navbar.css";
import { Icon } from "@chakra-ui/react";
import { IoIosHome } from "react-icons/io";
import { BsCurrencyExchange } from "react-icons/bs";
import { TiNews } from "react-icons/ti";
import { GiCryptEntrance } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <Box display={"flex"} justifyContent="space-between" boxShadow="md" p="2">
        <Box>
          {" "}
          <Link
            to="/"
            as={ReachLink}
            m="2"
            fontSize="25px"
            _hover={{
              textDecoration: "none",
              color: "darkgrey",
            }}
          >
            CryptoDome {<Icon as={GiCryptEntrance} />}
          </Link>
        </Box>
        <Box display={["none", "none", "flex"]} justifyContent="space-between">
          <Link
            to="/"
            as={ReachLink}
            m="2"
            p="1"
            _hover={{
              // display: "block",
              textDecoration: "none",
              color: "darkgrey",
            }}
          >
            Home page {<Icon as={IoIosHome} />}
          </Link>
          <Link
            to="/Cryptocurrencies"
            as={ReachLink}
            m="2"
            p="1"
            _hover={{
              display: "block",
              textDecoration: "none",
              color: "darkgrey",
            }}
          >
            {" "}
            Cryptocurrencies {<Icon as={BsCurrencyExchange} />}
          </Link>
          <Link
            to="/News"
            as={ReachLink}
            m="2"
            p="1"
            _hover={{
              textDecoration: "none",
              color: "darkgrey",
            }}
          >
            News {<Icon as={TiNews} />}
          </Link>
        </Box>
      </Box>
      <Box display={["block", "block", "none"]}>
        <MobileMenu />
      </Box>
    </>
  );
};

export default Navbar;
