import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Link,
  Image,
  Button,
  Icon,
  Heading,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import millify from "millify";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { GiApolloCapsule } from "react-icons/gi";
import { useSelector } from "react-redux";
import Cryptocurrencies from "./Cryptocurrencies";
import moment from "moment";

const Hompage = () => {
  const { stats, loading } = useSelector((state) => {
    return state.crypto;
  });

  const { newsItems, loadingNews } = useSelector((state) => {
    return state.news;
  });
  const BG = useColorModeValue("white", "gray.600");

  return (
    <Box m="2">
      <SimpleGrid columns={[1, 2, 4]} spacing="5" p="5" boxShadow="md" m="2">
        {!loading && (
          <>
            {" "}
            <Box boxShadow="md" rounded="md" p="4" bg={BG}>
              <Icon as={MdOutlineVolunteerActivism} />
              <Text fontSize="lg">Total 24h Volume</Text>
              <Text>{millify(stats.total24hVolume)}</Text>
            </Box>
            <Box rounded="md" p="4" boxShadow={"base"} bg={BG}>
              <Icon as={MdDoNotDisturbOnTotalSilence} />
              <Text fontSize="lg">Total Exchanges</Text>
              <Text>{millify(stats.totalExchanges)}</Text>
            </Box>
            <Box rounded="md" p="4" boxShadow={"base"} bg={BG}>
              <Icon as={SiMarketo} />
              <Text fontSize="lg">Total Markets</Text>
              <Text>{millify(stats.totalMarkets)}</Text>
            </Box>
            <Box rounded="md" p="4" boxShadow={"base"} bg={BG}>
              <Icon as={GiApolloCapsule} />
              <Text fontSize="lg">Total Market Cap</Text>
              <Text>{millify(stats.totalMarketCap)}</Text>
            </Box>{" "}
          </>
        )}
      </SimpleGrid>

      <Box display="flex" justifyContent="space-between" m="2.5">
        <Heading size="sm" fontFamily="sans-serif">
          {" "}
          Top 10 Cryptocurrencies In The World
        </Heading>
        <Button
          fontSize="sm"
          border="1px solid white"
          p="3"
          boxShadow="md"
          _hover={{ bg: "darkgrey", textDecoration: "none" }}
        >
          <Link
            as={ReachLink}
            to="/Cryptocurrencies"
            _hover={{ textDecoration: "none" }}
          >
            Show more
          </Link>
        </Button>
      </Box>

      <Cryptocurrencies simplified />

      <Box display="flex" justifyContent="space-between" margin="2.5">
        <Heading fontSize="sm" fontFamily="sans-serif">
          {" "}
          Latest Cryptocurrency News
        </Heading>
        <Button
          fontSize="md"
          border="1px solid white"
          p="3"
          boxShadow="md"
          _hover={{ bg: "darkgrey", textDecoration: "none" }}
        >
          <Link as={ReachLink} to="/News" _hover={{ textDecoration: "none" }}>
            Show more
          </Link>
        </Button>
      </Box>

      <SimpleGrid column={[1, 2, 4]} m="2" boxShadow="md" p="5">
        {!loadingNews &&
          newsItems &&
          newsItems?.map((newsItem, indx) => {
            return (
              <Box key={indx} m="2" p="5">
                <a href={newsItem.url} target="_blank" rel="noreferrer">
                  <Box boxShadow="md" p="5">
                    <Heading size="md">{newsItem.name}</Heading>
                    <Image
                      src={newsItem?.image?.thumbnail?.contentUrl}
                      alt=""
                      width="5%"
                    />
                    <Text>
                      {newsItem.description.length > 100
                        ? `${newsItem.description.substring(0, 100)}...`
                        : newsItem.description}
                    </Text>
                    <Box>
                      <Avatar
                        src={newsItem.provider[0]?.image?.thumbnail?.contentUrl}
                        alt=""
                        size="sm"
                      />
                      <Text>{newsItem.provider[0]?.name}</Text>
                    </Box>
                    <Text>
                      {moment(newsItem.datePublished).startOf("ss").fromNow()}
                    </Text>
                  </Box>
                </a>
              </Box>
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Hompage;
