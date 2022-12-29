import { Flex, Image, Text, Box, SimpleGrid, GridItem, Center } from '@chakra-ui/react'
import React, { useState } from 'react'
import router from "next/router";

type miniaturePostData = {
  title: string
  text: string
  image: string
}

export const MiniaturePost = ({ title, text, image }: miniaturePostData) => {
  const [opacityView, setOpacityView] = useState(false)
  console.log(opacityView)
  return (
    <Box px={["20px", "20px", "0px"]} >
      <SimpleGrid columns={[1, 1, 6]} _hover={{ bg: '#d8d8d8', opacity:'0.8' }} onFocus={() => setOpacityView(true)} borderRadius={["15px", "15px", "15px"]} marginBottom="30px" cursor="pointer" bg="#FFF" onClick={() => router.push('/news')}>
      <GridItem colSpan={[1, 1, 2]}>
        <Box
          width="100%"
          h="max-content"
        >
          <Image
            src={image}
            objectFit="contain"
            alt="image"
            
          />
        </Box>
      </GridItem>
      <GridItem colSpan={[1, 1, 4]} p={["15px", "15px", "0px"]} my="auto" ml={["0px", "0px", "20px"]} >
        <Text
          fontSize={["20px", "20px", "2.5rem"]}
          fontFamily="aktiv-grotesk, sans-serif"
          fontWeight="700"
          color="#000"
          paddingBottom="20px"
          textAlign="left" >
          {title}
        </Text>
        <Text fontSize={["16px", "16px", "1.25rem"]}
          fontFamily="aktiv-grotesk, sans-serif"
          letterSpacing="-0.2px"
          fontWeight="400"
          color="#000"
          textAlign="left">
          {text}
        </Text>
      </GridItem>
    </SimpleGrid>
    </Box >
  )
}
