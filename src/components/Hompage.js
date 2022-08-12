import React, { useEffect } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import Navbar from "./Navbar";
import millify from "millify";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

const Hompage = () => {
  const { stats, coins, loading } = useSelector((state) => {
    return state.crypto;
  });

  console.log(coins);

  const firstTenCryotos = coins ? coins.slice(0, 10) : "loading...";
  console.log(firstTenCryotos);

  const currencies = firstTenCryotos.map((coin) => {
    return (
      <Link key={coin.uuid} as={ReachLink} to={`cryptocurrencies/${coin.uuid}`}>
        <Box boxShadow="dark-lg" rounded="md" p="4" bg="white">
          <Image borderRadius="md" src={coin.iconUrl} width="5%" />
          <Text>Coin Name:{coin.name}</Text>
          <Text>Coin Rank{coin.rank}</Text>
          <Text>Coin Price:{millify(coin.price)}</Text>
          <Text> 24hour Change:{coin.change}%</Text>
        </Box>
      </Link>
    );
  });

  return (
    <Box display="flex" flexDirection="column">
      <Navbar />
      <Container maxWidth="100%" px="5">
        <SimpleGrid columns={[1, 2, 4]} spacing="5" py="5">
          {!loading && (
            <>
              {" "}
              <Box boxShadow="base" rounded="md" p="4" bg="white">
                <AiTwotoneQuestionCircle />
                <Text fontSize="lg">Total 24h Volume</Text>
                <Text>{millify(stats.total24hVolume)}</Text>
              </Box>
              <Box rounded="md" p="4" boxShadow={"base"}>
                <Text fontSize="lg">Total Exchanges</Text>
                <Text>{millify(stats.totalExchanges)}</Text>
              </Box>
              <Box rounded="md" p="4" boxShadow={"base"}>
                <Text fontSize="lg">Total Markets</Text>
                <Text>{millify(stats.totalMarkets)}</Text>
              </Box>
              <Box rounded="md" p="4" boxShadow={"base"}>
                <Text fontSize="lg">Total Market Cap</Text>
                <Text>{millify(stats.totalMarketCap)}</Text>
              </Box>{" "}
            </>
          )}
          {loading && <>loading...</>}
        </SimpleGrid>
      </Container>

      <Box display="flex" justifyContent="space-between">
        <Text fontSize="lg"> Top 10 Cryptocurrencies In The World</Text>
        <Text fontSize="lg">Show More...</Text>
      </Box>

      <SimpleGrid columns={[1, 2, 4]}>{!loading && currencies}</SimpleGrid>
    </Box>
  );
};

export default Hompage;
