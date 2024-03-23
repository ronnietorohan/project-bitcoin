import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import tokyoSrc from "../assets/tokyo.jpg"


const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto traders, we provide our guidence
            at a very low price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={[ "4","0"]} src={tokyoSrc} alt={"ronnie"}  />
          <Text fontWeight={"bold"} mt={"-8"} zIndex={"2"} fontSize={"smaller"} color={"blackAlpha.900"} >Mikey</Text>

          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;