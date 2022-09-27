import React, { useEffect } from "react";
import {
  SimpleGrid,
  Text,
  Link,
  // Box,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  useColorModeValue,

  // StatGroup,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link as ReachLink } from "react-router-dom";
import millify from "millify";
import { fetchCrypto } from "../services/cryptoApi";
import { useDispatch } from "react-redux";

export const Cryptocurrencies = ({ simplified }) => {
  const BG = useColorModeValue("white", "gray.600");
  const count = simplified ? 10 : 50;

  const { coins, loading } = useSelector((state) => {
    return state.crypto;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto(count));
  }, [count, dispatch]);

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

  //   <Stat>
  //   <StatLabel>Clicked</StatLabel>
  //   <StatNumber>45</StatNumber>
  //   <StatHelpText>
  //     <StatArrow type='decrease' />
  //     9.05%
  //   </StatHelpText>
  // </Stat>

  const currencies = coins?.map((coin) => {
    return (
      <Link
        key={coin.uuid}
        as={ReachLink}
        to={`/cryptocurrencies/${coin.uuid}`}
        _hover={{ textDecoration: "none", bg: "darkgrey" }}
      >
        <Stat boxShadow="md" rounded="md" p="4" bg={BG}>
          <Image
            borderRadius="md"
            src={coin.iconUrl}
            width="10%"
            _hover={{ bg: "rgba(255, 255, 255, 0.868);" }}
          />
          <StatLabel>Coin Name:{coin.name}</StatLabel>
          <Text>Coin Rank:{coin.rank}</Text>
          <StatNumber>Coin Price:${millify(coin.price)}</StatNumber>
          <StatHelpText>
            <StatArrow type={coin.change > 0 ? "increase" : "decrease"} />
            {`24 hour change: ${coin.change}`}
          </StatHelpText>
          {/* <Text> 24hour Change:{coin.change}%</Text> */}
        </Stat>
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
