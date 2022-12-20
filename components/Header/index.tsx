import { Box, Flex, Image } from '@chakra-ui/react'
import router from 'next/router'
import React from 'react'
import logo from '../../public/uol.png'
export const Header = () => {
  return (
    <Box bg="#FFF" shadow="0 5px 40px -30px #888888">
      <Box maxW="1200px" mx="auto">
        <Flex
          px={['20px', '20px', '0px']}
          justify="space-between"
          maxW="1200px"
        >
          <Box>
            <Image
              cursor="pointer"
              onClick={() => router.push("/")}
              src="/images/uol.png"
              objectFit="cover"
              alt="logo"
              width="100px"
            />
          </Box>
        </Flex>
      </Box>
    </Box>

  )
}
