import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'
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
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus? Eaque rerum sunt error nobis magni minima dolorum exercitationem reiciendis molestias, distinctio commodi beatae aspernatur cum ut ad animi possimus.",
  },
  {
    image: "/images/image2.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus? Eaque rerum sunt error nobis magni minima dolorum exercitationem reiciendis molestias, distinctio commodi beatae aspernatur cum ut ad animi possimus.",
  },
  {
    image: "/images/image3.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus? Eaque rerum sunt error nobis magni minima dolorum exercitationem reiciendis molestias, distinctio commodi beatae aspernatur cum ut ad animi possimus.",
  },
  {
    image: "/images/image1.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus? Eaque rerum sunt error nobis magni minima dolorum exercitationem reiciendis molestias, distinctio commodi beatae aspernatur cum ut ad animi possimus.",
  },
  {
    image: "/images/image2.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus? Eaque rerum sunt error nobis magni minima dolorum exercitationem reiciendis molestias, distinctio commodi beatae aspernatur cum ut ad animi possimus.",
  },
  {
    image: "/images/image3.png",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque, repellendus? Eaque rerum sunt error nobis magni minima dolorum exercitationem reiciendis molestias, distinctio commodi beatae aspernatur cum ut ad animi possimus.",
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
      <Box maxW="1200px" mx="auto" marginTop="60px" bg="#FFF">
        <>{news.map((item, index) => (
          <MiniaturePost key={index} image={item.image} title={item.title} text={item.text} />
        ))}</>
        {/* {data?.posts?.map(item => <>{item.title}</>)}; */}
      </Box>
      <Footer />
    </Box >
  )
}
