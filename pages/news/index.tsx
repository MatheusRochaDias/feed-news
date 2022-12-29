import { Box, Text, Image, Avatar, Flex, Center, Stack, Button } from '@chakra-ui/react'
import React from 'react'
import { Footer, Header } from '../../components/index,'
import { ImWhatsapp } from 'react-icons/im';
import { RiTelegramLine } from 'react-icons/ri';


const News = () => {
  return (
    <Box>
      <Header />
      <Box maxW="1200px" mx="auto" px={["20px", "20px", "0px"]} >
        <Box pt="60px"  >
          <Image
            h="250px"
            w="100%"
            src="/images/image3.png"
            objectFit="cover"
            alt="logo"
            borderRadius={"15px 15px 0 0"}
          />
        </Box>
        <Text paddingTop="20px"
          fontSize={["20px", "20px", "2.5rem"]}
          fontFamily="aktiv-grotesk, sans-serif"
          fontWeight="700"
          textAlign="center"
        >
          WhatsApp permite recuperar mensagens apagadas por engano veja como usar
        </Text>
        <Text py="40px"
          fontSize={["16px", "16px", "1.25rem"]}
          fontFamily="aktiv-grotesk, sans-serif"
          fontWeight="600"
          textAlign="justify"
        >
          Segundo a empresa, o novo recurso chega para aqueles momentos em que você deseja excluir uma mensagem para todos, mas acabou excluindo acidentalmente apenas para você.
        </Text>
        <Box w="fit-content">
          <Center gap="5">
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size="lg" />
            <Text letterSpacing="3.5px"
              fontSize={["0.9rem", "0.9rem", "1rem"]}
              fontFamily="aktiv-grotesk, sans-serif"
            >
              Por: Jonas Silva <br />
              19/12/2022 16h33 Atualizado há 15 horas
            </Text>
          </Center>
        </Box>
        <Stack direction={["column", "column", 'row']} spacing={4} py="30px" >
          <Button leftIcon={<RiTelegramLine size="35px" overflow="hide" />} colorScheme='telegram' variant='solid'>
            Compartilhe no Telegram
          </Button>
          <Button rightIcon={<ImWhatsapp size="30px" />} colorScheme='whatsapp' variant='outline'>
            Compartilhe no WhatsApp
          </Button>
        </Stack>
        <Text paddingTop="20px"
          fontSize={["16px", "16px", "1.25rem"]}
          fontFamily="aktiv-grotesk, sans-serif"
          fontWeight="400"
          textAlign="justify"
          >
          O WhatsApp anunciou nesta segunda-feira (19) que, agora, os usuários podem desfazer a exclusão de mensagens no aplicativo. O recurso chega para ajudar pessoas que queriam apagar um conteúdo para todos em um grupo, mas que acabou tocando em apagar para mim por engano.
          <br /><br />
          Adicionamos a opção de desfazer Apagar para mim para aqueles momentos em que você deseja excluir para todos, mas excluiu acidentalmente apenas para você, disse Will Cathcart, diretor do WhatsApp.
          <br />
          O g1 conseguiu testar a novidade tanto no Android como no iPhone (iOS), mas o WhatsApp ainda não informou se ela já está disponível para todos os usuários.
          <br />
          Como desfazer o Apagar para mim
          <br /><br />
          Depois de enviar uma mensagem, pressione o dedo nela e então toque em Apagar;
          Após tocar em Apagar para mim sem querer, toque em Desfazer;
          Feito isso, o texto voltará ao chat;
          Então, toque em Apagar para todos, caso queira excluir para todo mundo.
          <br /><br />
          Nos testes do g1, o recurso só funcionou com o Apagar para mim, não sendo possível desfazer a exclusão após tocar em Apagar para todos sem querer.
          <br /><br />
        </Text>
      </Box>
      <Footer />
    </Box >
  )
}

export default News
