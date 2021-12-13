import { Box, Container, Flex } from '@chakra-ui/layout'
import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { getAllFilesFrontMatter } from '../lib/md'
import AboutCard from '../components/cards/AboutCard'
import PostListItem from '../components/posts/PostListItem'



export default function Home({allPost}) {

  console.log(allPost)

  const metadata = {
    title: "Últimos Artículos",
  };

  return (
    <div /* style={{background: "#111827"}} */ style={{background: "#fff"}}>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Poppins&display=swap" rel="stylesheet" />
      </Head>


      <Header />
      <Box>

        <Container maxW="container.2xl" paddingX="5rem" marginTop="10" height="auto">
          <Flex 
            fontSize="xl"
            direction={["column", "column", "column", "row"]}
            justify="space-between">
            
            <Layout metadata={metadata}>
              {allPost && allPost.map(({date, title, tags}) => (
                <PostListItem key={title} 
                  date={date}
                  title={title}
                  tags={tags} />
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
