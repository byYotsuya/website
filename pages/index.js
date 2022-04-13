import Head from 'next/head'
import NextLink from 'next/link'


import Layout from '../components/Layout'
import Header from '../components/Header'
import AboutCard from '../components/cards/AboutCard'
import PostListItem from '../components/posts/PostListItem'

import { getAllFilesFrontMatter } from '../lib/md'


export default function Home({ allPost }) {

  const metadata = {
    title: "Últimos Artículos",
  };

  return (
    <div style={{ background: "#181a1b" }}>

      <Head>
        <title>Miguel Martínez - Web site</title>
      </Head>


      <Header />
      <div>

        <div className='max-w-7xl px-5 md:px-10 mt-10 h-auto mx-auto'>
          <div className='grid grid-rows-2 lg:grid-cols-4 text-xl flex-col lg:flex-row justify-between'>

            <div className='lg:col-span-3'>
              <Layout metadata={metadata}>
                {allPost && allPost.map(({ date, title, tags, slug }) => (
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
            </div>

            <div className='lg:col-span-1'>
              <AboutCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export async function getStaticProps(context) {
  const allPost = await getAllFilesFrontMatter("posts") || []

  return {
    props: {
      allPost
    }
  }
}

