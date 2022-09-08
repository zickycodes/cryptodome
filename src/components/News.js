import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Select,
  Box,
  SimpleGrid,
  Heading,
  Image,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { fetchCryptoNews } from "../services/cryptoNewsApi";
import moment from "moment";

const News = () => {
  const { coins } = useSelector((state) => {
    return state.crypto;
  });
  const coinNames = coins?.map((coin) => {
    return coin.name;
  });

  const [crypto, setCrypto] = useState("Cryptocurrency");
  console.log(crypto);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoNews(crypto));
  }, [crypto, dispatch]);

  const { newsItems, loadingNews } = useSelector((state) => {
    return state.news;
  });

  console.log(newsItems);

  return (
    <Box m={2}>
      <Select
        placeholder="Select Cryptocurrency"
        value={crypto}
        onChange={(e) => setCrypto(e.target.value)}
      >
        {coinNames?.map((coinname) => (
          <option value={coinname} key={coinname}>
            {coinname}
          </option>
        ))}
      </Select>

      <SimpleGrid column={[1, 2, 4]} m="2">
        {!loadingNews &&
          newsItems &&
          newsItems?.map((newsItem) => {
            return (
              <Box m="2">
                <a href={newsItem.url} target="_blank" rel="noreferrer">
                  <Box boxShadow="md">
                    <Heading size="md">{newsItem.name}</Heading>
                    <Image
                      src={newsItem?.image?.thumbnail?.contentUrl}
                      alt=""
                      width="20%"
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

export default News;
