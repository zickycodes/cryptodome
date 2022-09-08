import { Box, Select } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCryptoDetail } from "../services/cryptoHistory";

const CryptoDetail = () => {
  const timeStamps = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  const { coinId } = useParams();
  const [timeStamp, setTimeStamp] = useState("24h");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCryptoDetail(coinId));
  }, [coinId, timeStamp, dispatch]);

  return (
    <Box>
      <Select
        placeholder="Select Cryptocurrency"
        value={crypto}
        onChange={(e) => setTimeStamp(e.target.value)}
      >
        {timeStamps.map((time, indx) => (
          <option value={timeStamp} key={indx}>
            {time}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default CryptoDetail;
