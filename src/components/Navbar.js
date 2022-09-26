import React from "react";
import { Box, Link, Button, useColorMode } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
// import "./Navbar.css";
import { Icon } from "@chakra-ui/react";
import { IoIosHome } from "react-icons/io";
import { BsCurrencyExchange } from "react-icons/bs";
import { TiNews } from "react-icons/ti";
import { GiCryptEntrance } from "react-icons/gi";
import { RiSunLine } from "react-icons/ri";
import { HiSun } from "react-icons/hi";

export const navLinks = [
  {
    path: "/",
    icon: IoIosHome,
    name: "Home page ",
  },
  {
    path: "/Cryptocurrencies",
    icon: BsCurrencyExchange,
    name: "Cryptocurrencies",
  },
  {
    path: "/News",
    icon: TiNews,
    name: "News ",
  },
];

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box display={["none", "none", "flex"]} justifyContent="space-between">
      {navLinks.map((link, indx) => (
        <Link
          to={link.path}
          key={indx}
          as={ReachLink}
          m="2"
          p="1"
          _hover={{
            textDecoration: "none",
            color: "darkgrey",
          }}
        >
          {link.name} {<Icon as={link.icon} />}
        </Link>
      ))}

      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <Icon as={HiSun} /> : <Icon as={RiSunLine} />}
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Box>
  );
};

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

        <Nav />

        <Box display={["block", "block", "none"]}>
          <MobileMenu />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
