// Chakra UI Imports
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Link,
  Icon,
  Box,
} from "@chakra-ui/react";
import React from "react";
// Other components
import { navLinks } from "./Navbar";
// React Fonts
import {GiHamburgerMenu} from "react-icons/gi"

// React-router-dom
import { Link as ReachLink } from "react-router-dom";

export default function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <Icon as = {GiHamburgerMenu}/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
      
          {navLinks.map(({ name, path, icon }, indx) => {
            return (
              <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="column"
                key = {indx}
              >
                <Link
                  onClick={(e) => {
                    if (e.target.tagName === "A") {
                      onClose();
                    }
                  }}
                  to={path}
                  as={ReachLink}
                  m="2"
                  p="2"
                  boxShadow="md"
                  _hover={{
                    // display: "block",
                    textDecoration: "none",
                    color: "darkgrey",
                  }}
                >
                  {name} {<Icon as={icon} />}
                </Link>
              </Box>
            );
          })}
        </DrawerContent>
      </Drawer>
    </>
  );
}
