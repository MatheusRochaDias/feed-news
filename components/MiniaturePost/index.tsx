import { Flex, Image, Text, Box, SimpleGrid, GridItem, Center } from '@chakra-ui/react'
import React from 'react'
import router from "next/router";

type miniaturePostData = {
  title: string
  text: string
  image: string
}

export const MiniaturePost = ({ title, text, image }: miniaturePostData) => {
  return (
    <SimpleGrid columns={6} marginBottom="30px" cursor="pointer" bg="#FFF" onClick={() => router.push('/news')}>
      <GridItem colSpan={2}>
        <Box h="220px"
          width="380px"
        >
          <Image
            src={image}
            objectFit="cover"
            alt="logo"
          />
        </Box>
      </GridItem>
      <GridItem colSpan={4} >
        <Text
          fontSize="40px"
          fontFamily="aktiv-grotesk, sans-serif"
          fontWeight="700"
          color="#000"
          paddingBottom="20px" >
          {title}
        </Text>
        <Text fontSize="20px"
          fontFamily="aktiv-grotesk, sans-serif"
          letterSpacing="-0.88px"
          fontWeight="400"
          color="#000">
          {text}
        </Text>
      </GridItem>
    </SimpleGrid>
  )
}
