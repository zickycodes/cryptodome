import React from "react";
import { SimpleGrid, Text, Link, Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link as ReachLink } from "react-router-dom";
import millify from "millify";

export const Cryptocurrencies = () => {
  const { coins, loading } = useSelector((state) => {
    return state.crypto;
  });

  const currencies = coins?.map((coin) => {
    return (
      <Link key={coin.uuid} as={ReachLink} to={`cryptocurrencies/${coin.uuid}`}>
        <Box boxShadow="dark-lg" rounded="md" p="4" bg="white">
          <Image borderRadius="md" src={coin.iconUrl} width="5%" />
          <Text>Coin Name:{coin.name}</Text>
          <Text>Coin Rank:{coin.rank}</Text>
          <Text>Coin Price:{millify(coin.price)}</Text>
          <Text> 24hour Change:{coin.change}%</Text>
        </Box>
      </Link>
    );
  });

  return (
    <SimpleGrid columns={[1, 2, 4]} spacing="20px" m="20px">
      {!loading && currencies}
    </SimpleGrid>
  );
};

export default Cryptocurrencies;
