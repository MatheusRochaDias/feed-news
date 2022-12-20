import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import { Footer, Header, MiniaturePost } from '../components/index,'

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

];



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box>
      <Header />
      <Box maxW="1200px" mx="auto" marginTop="80px" bg="#FFF">
        <>{news.map((item, index) => (
          <MiniaturePost key={index} image={item.image} title={item.title} text={item.text} />
        ))}</>
      </Box>
      <Footer />
    </Box>
  )
}
