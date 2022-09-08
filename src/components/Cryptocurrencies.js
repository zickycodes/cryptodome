import React, { useEffect } from "react";
import { SimpleGrid, Text, Link, Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link as ReachLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCrypto } from "../services/cryptoApi";
import millify from "millify";

export const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 50;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto(count));
  });

  const { coins, loading } = useSelector((state) => {
    return state.crypto;
  });

  //  {/* <SimpleGrid
  //       columns={[1, 2, 4]}
  //       spacing="20px"
  //       boxShadow="md"
  //       m="2"
  //       py="5"
  //     >
  //       {!loading &&
  //         coins &&
  //         coins.slice(0, 10).map((coin) => {
  //           return (
  //             <Link
  //               key={coin.uuid}
  //               as={ReachLink}
  //               to={`cryptocurrencies/${coin.uuid}`}
  //               _hover={{ textDecoration: "none", bg: "darkgrey" }}
  //             >
  //               <Box
  //                 boxShadow="md"
  //                 rounded="md"
  //                 p="4"
  //                 bg="white"
  //                 _hover={{ bg: "rgba(255, 255, 255, 0.868);" }}
  //               >
  //                 <Image borderRadius="md" src={coin.iconUrl} width="10%" />
  //                 <Text>Coin Name:{coin.name}</Text>
  //                 <Text>Coin Rank:{coin.rank}</Text>
  //                 <Text>Coin Price:{millify(coin.price)}</Text>
  //                 <Text> 24hour Change:{coin.change}%</Text>
  //               </Box>
  //             </Link>
  //           );
  //         })}
  //     </SimpleGrid> */

  const currencies = coins?.map((coin) => {
    return (
      <Link
        key={coin.uuid}
        as={ReachLink}
        to={`cryptocurrencies/${coin.uuid}`}
        _hover={{ textDecoration: "none", bg: "darkgrey" }}
      >
        <Box boxShadow="md" rounded="md" p="4" bg="white">
          <Image
            borderRadius="md"
            src={coin.iconUrl}
            width="10%"
            _hover={{ bg: "rgba(255, 255, 255, 0.868);" }}
          />
          <Text>Coin Name:{coin.name}</Text>
          <Text>Coin Rank:{coin.rank}</Text>
          <Text>Coin Price:{millify(coin.price)}</Text>
          <Text> 24hour Change:{coin.change}%</Text>
        </Box>
      </Link>
    );
  });

  return (
    <SimpleGrid columns={[1, 2, 4]} spacing="20px" boxShadow="md" m="2" py="5">
      {!loading && currencies}
    </SimpleGrid>
  );
};

export default Cryptocurrencies;
