import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Box, Center, Divider, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { Footer, Header, MiniaturePost, PostCard } from '../components/index,'
import parse, {
  DOMNode,
  Element,
  HTMLReactParserOptions,
} from 'html-react-parser';

import { useQuery, gql } from '@apollo/client'

const GET_POSTS_QUERY = gql`
query MyQuery {
  posts {
    createdAt
    title
    slug
    excerpt
    content {
      html
    }
    featuredImage {
      url
    }
    featuredPost
    author {
      name
      photo {
        url
      }
      bio
    }
  }
}
`


var news = [
  {
    image: "/images/image1.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus?",
  },
  {
    image: "/images/image2.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus?",
  },
  {
    image: "/images/image3.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus?",
  },
  {
    image: "/images/image1.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus?",
  },
  {
    image: "/images/image2.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus?",
  },
  {
    image: "/images/image3.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus?",
  },
  {
    image: "/images/image3.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus?",
  },
  {
    image: "/images/image1.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus?",
  },
  {
    image: "/images/image2.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus?",
  },
  {
    image: "/images/image3.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus?",
  },
  // {
  //   image: "/images/image1.png",
  //   title: "Lorem ipsum dolor sit amet",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus? Eaque rerum sunt error nobis magni minima dolorum exercitationem reiciendis molestias, distinctio commodi beatae aspernatur cum ut ad animi possimus.",
  // },
  // {
  //   image: "/images/image2.png",
  //   title: "Lorem ipsum dolor sit amet",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus? Eaque rerum sunt error nobis magni minima dolorum exercitationem reiciendis molestias, distinctio commodi beatae aspernatur cum ut ad animi possimus.",
  // },
  // {
  //   image: "/images/image3.png",
  //   title: "Lorem ipsum dolor sit amet",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus? Eaque rerum sunt error nobis magni minima dolorum exercitationem reiciendis molestias, distinctio commodi beatae aspernatur cum ut ad animi possimus.",
  // },
  // {
  //   image: "/images/image1.png",
  //   title: "Lorem ipsum dolor sit amet",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus? Eaque rerum sunt error nobis magni minima dolorum exercitationem reiciendis molestias, distinctio commodi beatae aspernatur cum ut ad animi possimus.",
  // },
  // {
  //   image: "/images/image2.png",
  //   title: "Lorem ipsum dolor sit amet",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus? Eaque rerum sunt error nobis magni minima dolorum exercitationem reiciendis molestias, distinctio commodi beatae aspernatur cum ut ad animi possimus.",
  // },
  // {
  //   image: "/images/image3.png",
  //   title: "Lorem ipsum dolor sit amet",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus? Eaque rerum sunt error nobis magni minima dolorum exercitationem reiciendis molestias, distinctio commodi beatae aspernatur cum ut ad animi possimus.",
  // },

];


export interface posts {
  createdAt: string,
  title: string,
  slug: string,
  excerpt: string,
  content: {
    html: string
  },
  featuredImage: {
    url: string
  },
  featuredPost: boolean,
  author: {
    name: string,
    photo: {
      url: string
    },
    bio: string
  }
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data } = useQuery<{ posts: posts[] }>(GET_POSTS_QUERY)
  console.log(data?.posts)



  return (
    <Box>
      <Header />
      <Box maxW="1200px" mx="auto" marginTop="40px" bg="#FFF">
        <Center pb="20px">
          <Box letterSpacing="4px" w="full">
            <Text textAlign="center" pb="5px  ">
              PUBLICIDADE
            </Text>
            <Image
              h={["150px","150px","250px"]}
              w="100%"
              px={["10px","10px","0px"]}
              src="/images/image3.png"
              objectFit="cover"
              alt="logo"
              borderRadius="5px"
            />
          </Box>
        </Center>
        <Flex >
          <Box w={["100%", "100%", "65%"]}>
            <MiniaturePost number={0} image={news[0].image} title={news[0].title} text={news[0].text} />
            <SimpleGrid pt="10px" columns={[1, 1, 3]} gap={10} pb="10px">
              {news.map((item, index) => {
                if (index !== 0) return (
                  <MiniaturePost key={index} number={index} image={item.image} title={item.title} text={item.text} />
                )
              })}
            </SimpleGrid>
          </Box>
          <Box w="35%" display={["none", "none", "block"]} pl="30px" pt="5px" >
            <Box
              width="100%"
              bg="#F2F2F2"
            >
              <Image
                src={news[0].image}
                w={["full", "full", "full"]}
                objectFit="contain"
                alt="image"

              />
              <Text
                fontSize={["20px", "20px", "1.25rem"]}
                fontFamily="aktiv-grotesk, sans-serif"
                fontWeight="700"
                color="#000"
                paddingBottom="20px"
                textAlign="center"
                lineHeight="1.2"
                p="10px"
                fontStyle="italic"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quo sint? Repudiandae provident nisi est autem              </Text>
            </Box>
            <Box
              mt="20px"
              mb="20px"
              width="100%"
              bg="#F2F2F2"
            >
              <Image
                src={news[0].image}
                w={["full", "full", "full"]}
                objectFit="contain"
                alt="image"

              />
              <Text
                fontSize={["20px", "20px", "1.25rem"]}
                fontFamily="aktiv-grotesk, sans-serif"
                fontWeight="700"
                color="#000"
                paddingBottom="20px"
                textAlign="center"
                lineHeight="1.2"
                p="10px"
                fontStyle="italic"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, quo sint? Repudiandae provident nisi est autem              </Text>
            </Box>
          </Box>

        </Flex>
        {/* {data?.posts?.map(item => <>{item.title}</>)}; */}
      </Box>
      <Footer />
    </Box >
  )
}
