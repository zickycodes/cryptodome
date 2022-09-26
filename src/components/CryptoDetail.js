import { Box, Select, Icon, Text, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCryptoHistory } from "../services/cryptoHistory";
import { fetchCryptoDetail } from "../services/cryptoDetailrequest";
import { useSelector } from "react-redux";
import LineC from "./LineChart";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiDiamondTrophy } from "react-icons/gi";
import { AiOutlineNumber } from "react-icons/ai";
import millify from "millify";

const CryptoDetail = () => {
  const timeStamps = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  const { coinId } = useParams();
  const [timeStamp, setTimeStamp] = useState("24h");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoHistory({ coinId, timeStamp }));
    dispatch(fetchCryptoDetail(coinId));
  }, [coinId, timeStamp, dispatch]);

  const { history, loadingHistory } = useSelector((state) => {
    return state.history;
  });

  const { coin, loadingDetail } = useSelector((state) => {
    return state.detail;
  });

  console.log(history);
  console.log(coin);

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coin?.price && millify(coin?.price)}`,
      icon: BsCurrencyDollar,
    },
    {
      title: "Rank",
      value: `$ ${coin?.rank && coin.rank}`,
      icon: AiOutlineNumber,
    },
    {
      title: "Market Cap",
      value: `$ ${coin?.marketCap && millify(coin?.marketCap)}`,
      icon: AiFillDollarCircle,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        coin?.allTimeHigh?.price && millify(coin?.allTimeHigh?.price)
      }`,
      icon: GiDiamondTrophy,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coin?.numberOfMarkets,
      icon: BsCurrencyDollar,
    },
    {
      title: "Number Of Exchanges",
      value: coin?.numberOfExchanges,
      icon: AiOutlineNumber,
    },
    {
      title: "Aprroved Supply",
      value: `$ ${millify(coin?.supply?.supplyAt)}`,
      icon: AiFillDollarCircle,
    },
    {
      title: "Total Supply",
      value: `$ ${coin?.supply?.total && millify(coin?.supply?.total)}`,
      icon: AiFillDollarCircle,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        coin?.supply?.circulating && millify(coin?.supply?.circulating)
      }`,
      icon: GiDiamondTrophy,
    },
  ];

  return (
    <Box m="2" p="2">
      <Heading size="lg" m="1">
        {coin?.name}
      </Heading>
      <Select
        placeholder="Select Time"
        value={crypto}
        onChange={(e) => {
          console.log(e.target.value);
          setTimeStamp(e.target.value);
        }}
      >
        {timeStamps.map((time, indx) => (
          <option value={time} key={indx}>
            {time}
          </option>
        ))}
      </Select>

      {!loadingHistory && !loadingDetail && (
        <LineC coinHistory={history} m="1" />
      )}

      <Box>
        {stats.map(({ title, value, icon }, indx) => {
          return (
            <Box key={indx} boxShadow="md" width="100%" m="2" p="2">
              <Heading size="md">
                {title} {<Icon as={icon} />}
              </Heading>{" "}
              <Text>{value}</Text>
            </Box>
          );
        })}
      </Box>

      <Box>
        {genericStats.map(({ title, value, icon }, indx) => {
          return (
            <Box key={indx} boxShadow="md" width="100%" m="2" p="2">
              <Heading size="md">
                {title} {<Icon as={icon} />}
              </Heading>{" "}
              <Text>{value}</Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CryptoDetail;
