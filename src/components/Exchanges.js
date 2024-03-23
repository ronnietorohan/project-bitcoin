import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  Heading,
  VStack,
  Text,
  Image,
  RadioGroup,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorContainer from "./ErrorContainer";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        console.log(data);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchExchange();
  }, []);

  if (error)
    return <ErrorContainer message={"Caught error while fetching exchanges"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((item) => (
              <ExchangeCard
                key={item.id}
                name={item.name}
                rank={item.trust_score_rank}
                url={item.url}
                img={item.image}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, rank, img, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image src={img} w="10" h="10" objectFit={"contain"} alt="Exchange" />

      <Heading size={"md"} noOfLines={1}>
        {name}
      </Heading>
  
      <Text noOfLines={1} >{rank}</Text>
    </VStack>
  </a>
);

export default Exchanges;
