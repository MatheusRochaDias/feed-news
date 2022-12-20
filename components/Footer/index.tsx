import { Box, Image, Text, SimpleGrid, Center, Flex } from '@chakra-ui/react'
import React from 'react'
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai';

export const Footer = () => {
  return (
    <Box bg="#121212" pb={['0px', '0px', '30px']}>
      <Box maxW="1200px" py={['0px', '0px', '10px']} mx="auto">
        <SimpleGrid
          columns={[2, 2, 3]}
          gap={[2, 2, 0]}
          p={['20px', '0px']}
          py="60px"
        >
          <Box>
            <Text
              paddingTop="20px"
              fontSize="20px"
              fontFamily="aktiv-grotesk, sans-serif"
              fontWeight="700"
              color="#FFF"
            >
              Institucional
            </Text>
            <Text fontWeight="400" fontSize="12px" pt="10px" color="#B0B0B0">
              Código de ética
            </Text>
            <Text fontWeight="400" fontSize="12px" pt="10px" color="#B0B0B0">
              Política de privacidade
            </Text>
            <Text fontWeight="400" fontSize="12px" pt="10px" color="#B0B0B0">
              Termo de uso
            </Text>
          </Box>
          <Box>
            <Text
              paddingTop="20px"
              fontSize="20px"
              fontFamily="aktiv-grotesk, sans-serif"
              fontWeight="700"
              color="#FFF"
            >
              Atendimento
            </Text>
            <Text fontWeight="400" fontSize="12px" pt="10px" color="#B0B0B0">
              Central de Relacionamento
              <br /> 0800 xxx xxxx
            </Text>
            <Text fontWeight="400" fontSize="12px" pt="10px" color="#B0B0B0">
              ajuda@ajuda.com
            </Text>
          </Box>
          <Box>
            <Text
              paddingTop="20px"
              fontSize="20px"
              fontFamily="aktiv-grotesk, sans-serif"
              fontWeight="700"
              color="#FFF"
            >
              Empresa
            </Text>
            <Text fontWeight="400" fontSize="12px" pt="10px" color="#B0B0B0">
              Home
            </Text>
            <Text fontWeight="400" fontSize="12px" pt="10px" color="#B0B0B0">
              Ultimas Notícias
            </Text>
            <Text fontWeight="400" fontSize="12px" pt="10px" color="#B0B0B0">
              Carreiras
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box bg="#121212" borderTop="1px solid #707070" py="20px">
        <SimpleGrid maxW="1200px" mx="auto" columns={[1, 1, 2]}>
          <Flex gap={5}>
            <Center>
              <Text
                fontFamily="aktiv-grotesk, sans-serif"
                fontWeight="700"
                fontSize="12px"
                color="#FFF"
                pr="30px"
              >
                SIGA NOSSAS REDES SOCIAIS
              </Text>
              <Flex gap={2}>
                <Box color="#FFF" cursor="pointer">
                  <AiOutlineInstagram size="30px" />
                </Box>
                <Box color="#FFF" cursor="pointer">
                  <AiOutlineLinkedin size="30px" />
                </Box>
                <Center color="#FFF" cursor="pointer">
                  <AiOutlineTwitter size="30px" />
                </Center>
                <Center color="#FFF" cursor="pointer">
                  <AiOutlineYoutube size="30px" />
                </Center>
              </Flex>
            </Center>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
