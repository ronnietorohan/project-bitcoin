import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack, Heading, VStack,Text, Image, Button, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorContainer from "./ErrorContainer";
import CardCoin from "./CardCoin";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [page, setPage] = useState('1')
  const [currency, setCurrency] = useState("inr")

  const btns = new Array(132).fill(1)


  const changePage = (page) => {
    setPage(page)
    setLoading(true)
  }


  const currencySymbol = currency === "inr"?  "₹" :  currency=== "eur"? "€" :"$"


  useEffect(() => {
    const fetchCoins = async () => {
    try{
      const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      console.log(data);
      setCoins(data);
      setLoading(false);
    }catch (error) {
        setLoading(false)
        setError(true)
    }


    };
    fetchCoins();
  }, [currency, page]);

  if(error) return <ErrorContainer message={"Caught error while fetching Coins"}/>

  

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
            <RadioGroup value= {currency} onChange={setCurrency}>
              <HStack>
                <Radio value= {"inr"} >INR</Radio>
                <Radio value = {"eur"}>EUR</Radio>
                <Radio value = {"usd"} >USD</Radio>
              </HStack>
            </RadioGroup> 
     
            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
              {coins.map((item) => (
                <CardCoin 
                id = {item.id}
                key={item.id}
                name = {item.name}
                price={item.current_price}
                img={item.image}
                symbol={item.symbol}
                currencySymbol = {currencySymbol}
                />
                ))}
                </HStack>

                <HStack w={"full"} overflowX={"auto"} p={"8"}>
                  {
                    btns.map((item,index) => (
                      <Button 
                      bgColor={"blackAlpha.900"}
                      colpor={"white"}
                      onClick={() => changePage(index+1)}
                      >
                      {index+1}
                      </Button>
                    ))
                  }
                </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
