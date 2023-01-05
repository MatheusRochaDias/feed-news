import { Flex, Image, Text, Box, SimpleGrid, GridItem, Center } from '@chakra-ui/react'
import React, { useState } from 'react'
import router from "next/router";

type miniaturePostData = {
  title: string
  text: string
  image: string
  number?: number
}

export const MiniaturePost = ({ title, number, text, image }: miniaturePostData) => {
  const [opacityView, setOpacityView] = useState(false)
  console.log(opacityView)
  return (
    <Box px={["10px","10px","4px"]}>
      <Box w={number !== 0 ? ["full", "full", "225px"] : ["100%"]} borderBottom= "1px" >
        <Box _hover={{ bg: '#F2F2F2', opacity: '0.8' }}

          onFocus={() => setOpacityView(true)}
          borderRadius={["15px", "15px", "15px"]}
          marginBottom="10px"
          cursor="pointer"
          bg="#FFF"
          onClick={() => router.push('/news')}>
          {number !== 0 &&
            <Box>
              <Box
                width="100%"
              >
                <Image
                  src={image}
                  w={["full", "full", "225px"]}
                  objectFit="contain"
                  alt="image"

                />
              </Box>
            </Box>
          }
          <Box p={["15px", "15px", "5px"]} my="auto" >
            <Text
              fontSize={["20px", "20px", "1.25rem"]}
              fontFamily="aktiv-grotesk, sans-serif"
              fontWeight="700"
              color="#000"
              paddingBottom="20px"
              textAlign="left"
              lineHeight="1.2"
              pt="4px"
            >

              {title}
            </Text>
            <Text fontSize={["16px", "16px", "1rem"]}
              fontFamily="aktiv-grotesk, sans-serif"
              lineHeight="1.2"
              fontWeight="400"
              color="#000"
              textAlign="left">
              {text}
            </Text>
          </Box>
        </Box>
      </Box >
    </Box >
  )
}
