import Head from 'next/head'
import NextLink from 'next/link'
import { Box, Container, Flex } from '@chakra-ui/layout'


import Layout from '../components/Layout'
import Header from '../components/Header'
import AboutCard from '../components/cards/AboutCard'
import PostListItem from '../components/posts/PostListItem'

import { getAllFilesFrontMatter } from '../lib/md'


export default function Home({allPost}) {

  const metadata = {
    title: "Últimos Artículos",
  };

  return (
    <div style={{background: "#fff"}}>

      <Head>
        <title>Miguel Martínez - Web site</title>
      </Head>


      <Header />
      <Box>

        <Container maxW="container.2xl" paddingX={[5,10,10,10]} marginTop="10" height="auto">
          <Flex 
            fontSize="xl"
            direction={["column", "column", "column", "row"]}
            justify="space-between">
            
            <Layout metadata={metadata}>
              {allPost && allPost.map(({date, title, tags, slug}) => (
                <NextLink href={slug} key={slug}>
                  <a href={slug}>
                    <PostListItem
                      date={date}
                      title={title}
                      tags={tags} />
                  </a>
                </NextLink>
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


export async function getStaticProps(context) {
  const allPost = await getAllFilesFrontMatter("posts")  || []

  return {
    props: {
      allPost
    }
  }
}

