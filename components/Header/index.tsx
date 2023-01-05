import { Box, Flex, Text, Image, Center } from '@chakra-ui/react'
import router from 'next/router'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import logo from '../../public/uol.png'
export const Header = () => {
  return (
    <Box>
      <Box bg="#000">
        <Flex justify="end" maxW="1200px" py={["8px","8px","16px"]} mx="auto" color="#FFF">
          <Center cursor="pointer"  px={['20px', '20px', '0px']}>
            <Box w={['20px', '20px', '30px']}>
            <AiOutlineMail size="full" />
            </Box>
            <Text textAlign="right"
              fontSize={["14px", "14px", "16px"]}
              fontFamily="aktiv-grotesk, sans-serif"
              fontWeight="400" w="full">EMAIL</Text>
          </Center>
        </Flex>
      </Box>
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
                src="https://conteudo.imguol.com.br/c/home/layout/vueland/icons/brand/uol-logo-full.svg?v4"
                objectFit="cover"
                alt="logo"
                width={["80px", "100px", "190px"]}
                py="30px"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
