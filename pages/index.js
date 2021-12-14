import Head from 'next/head'
import Link from 'next/link'
import { Box, Container, Flex } from '@chakra-ui/layout'


import Layout from '../components/Layout'
import Header from '../components/Header'
import AboutCard from '../components/cards/AboutCard'
import PostListItem from '../components/posts/PostListItem'

import { getAllFilesFrontMatter } from '../lib/md'


export default function Home({allPost}) {

  console.log(allPost)

  const metadata = {
    title: "Últimos Artículos",
  };

  return (
    <div style={{background: "#fff"}}>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Poppins&display=swap" rel="stylesheet" />
        <title>Miguel Martínez - Web site</title>
      </Head>


      <Header background={'#f1f5f9'}/>
      <Box>

        <Container maxW="container.2xl" paddingX={[5,10,10,10]} marginTop="10" height="auto">
          <Flex 
            fontSize="xl"
            direction={["column", "column", "column", "row"]}
            justify="space-between">
            
            <Layout metadata={metadata}>
              {allPost && allPost.map(({date, title, tags, slug}) => (
                <Link href={slug} >
                  <a>
                    <PostListItem key={title} 
                      date={date}
                      title={title}
                      tags={tags} />
                  </a>
                </Link>
              ))
              
              }
            </Layout>

            <AboutCard />
          </Flex>
        </Container>
      </Box>
    </div>
  )
}


export async function getStaticProps() {
  const allPost = await getAllFilesFrontMatter("posts")

  return {
    props: {
      allPost
    }
  }
}
