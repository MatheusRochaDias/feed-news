import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Footer, Header } from '../../components/index,'

const News = () => {
  return (
    <Box>
      <Header />
      <Box maxW="1200px" mx="auto" >
        <Box pt="60px" >
          <Image
            h="500px"
            w="100%"
            src="/images/image3.png"
            objectFit="cover"
            alt="logo"
          />
        </Box>
        <Text paddingTop="20px"
          fontSize="38px"
          fontFamily="aktiv-grotesk, sans-serif"
          fontWeight="700"
          textAlign="center"
        >
          WhatsApp permite recuperar mensagens apagadas por engano; veja como usar
        </Text>
        <Text py="40px"
          fontSize="20px"
          fontFamily="aktiv-grotesk, sans-serif"
          letterSpacing="-0.88px"
          fontWeight="400"
          textAlign="justify"
        >
          Segundo a empresa, o novo recurso chega para aqueles momentos em que você deseja excluir uma mensagem para todos, mas acabou excluindo acidentalmente apenas para você.
        </Text>
        <Box>
          <Text letterSpacing="3.5px"
            fontFamily="aktiv-grotesk, sans-serif"
          >
            Por: Jonas Silva <br />
            19/12/2022 16h33 Atualizado há 15 horas
          </Text>
        </Box>
        <Text paddingTop="20px"
          fontSize="20px"
          fontFamily="aktiv-grotesk, sans-serif"
          letterSpacing="-0.88px"
          fontWeight="400"
          textAlign="justify">
          O WhatsApp anunciou nesta segunda-feira (19) que, agora, os usuários podem desfazer a exclusão de mensagens no aplicativo. O recurso chega para ajudar pessoas que queriam apagar um conteúdo para todos em um grupo, mas que acabou tocando em apagar para mim por engano.
          <br /><br />
          <a href=""><strong>Compartilhe no WhatsApp</strong></a>
          <br />
          <a href=""><strong>Compartilhe no Telegram</strong></a>
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
